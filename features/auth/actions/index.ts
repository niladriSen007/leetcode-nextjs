"use server";

import { prisma } from "@/lib/prisma";
import { User } from "@/prisma/generated/prisma/client";
import { currentUser } from "@clerk/nextjs/server";
import { log } from "console";
import { Response } from "../types";

export const onBoardUserAction = async (): Promise<Response<User>> => {
  try {
    const user = await currentUser();
    if (!user) {
      return {
        success: false,
        message: "User not found",
        statusCode: 404,
        error: "User not found",
        data: null
      }
    }
    const { id, firstName, lastName, imageUrl, emailAddresses } = user;

    const newUser = await prisma.user.upsert({
      where: {
        clerkId: id
      },
      update: {
        firstName,
        lastName,
        email: emailAddresses[0]?.emailAddress || "",
        imageUrl: imageUrl || ""
      },
      create: {
        firstName: firstName || "",
        lastName: lastName || "",
        email: emailAddresses[0]?.emailAddress || "",
        imageUrl: imageUrl || "",
        clerkId: id
      }
    })
    return {
      data: newUser,
      success: true,
      message: "User onboarded successfully",
      statusCode: 200,
      error: null
    }
  } catch (error) {
    log("Error in onBoardUserAction:", error);
    return {
      data: null,
      success: false,
      message: "Internal Server Error",
      statusCode: 500,
      error: (error as Error).message
    }
  }
}

export const getCurrentUserRoleAction = async (): Promise<Response<string | null>> => {
  try {
    const user = await currentUser();
    if (!user) {
      return {
        data: null,
        success: false,
        message: "User not found",
        statusCode: 404,
        error: "User not found"
      }
    }
    const dbUser = await prisma.user.findUnique({
      where: {
        clerkId: user.id
      },
      select: {
        role: true
      }
    });
    return {
      data: dbUser?.role || null,
      success: true,
      message: "User role fetched successfully",
      statusCode: 200,
      error: null
    }
  } catch (error) {
    log("Error in getCurrentUserRoleAction:", error);
    return {
      data: null,
      success: false,
      message: "Internal Server Error",
      statusCode: 500,
      error: (error as Error).message
    }
  }
}