"use server";

import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { OnBoardUserResponse } from "../types";
import { User } from "@/prisma/generated/prisma/client";
import { log } from "console";

export const onBoardUserAction = async (): Promise<OnBoardUserResponse<User>> => {
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