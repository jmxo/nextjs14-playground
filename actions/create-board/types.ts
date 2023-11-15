import { z } from "zod";
import { CreateBoard } from "./schema";
import { Board } from "@prisma/client";
import { ActionState } from "@/lib/create-safe-action";

export type InputType = z.infer<typeof CreateBoard>;
export type ReturnType = ActionState<InputType, Board>;
