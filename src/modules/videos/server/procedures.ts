import { z } from 'zod'
import { db } from "@/db";
import { videos } from "@/db/schema";
import { createTRPCRouter, protectedProcedure } from "@/trpc/init";
import { mux } from '@/lib/mux';

export const videosRouter = createTRPCRouter({
    create: protectedProcedure.mutation(async ({ ctx }) => {
        const { id: userId } = ctx.user;

        const upload = await mux.video.uploads.create({
            new_asset_settings: {
                passthrough: userId,
                playback_policy: ["public"],
            },
            cors_origin: "*" //TODO: in production set ur URL
        })

        const [video] = await db
            .insert(videos)
            .values({
                userId,
                title: "Untitled"
            })
            .returning();

        return {
            video: video,
            url: upload.url,
        };
    }),
});