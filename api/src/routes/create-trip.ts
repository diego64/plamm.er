import type { FastifyInstance } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import dayjs from 'dayjs';
import { z } from 'zod';
import nodemailer from 'nodemailer'
import { prisma } from "../lib/prisma";
import { getMailClient } from "../lib/mail";

export async function createTrip(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post('/trips', {
    schema: {
      body: z.object({
        destination: z.string().min(4),
        starts_at: z.coerce.date(),
        ends_at: z.coerce.date(),
        owner_name: z.string(),
        owner_email: z.string().email()
      })
    },
  }, async (request) => {
    const { destination, starts_at, ends_at, owner_name, owner_email } = request.body

    if(dayjs(starts_at).isBefore(new Date())) {
      throw new Error('Invalid trip start date')
    }

    if(dayjs(ends_at).isBefore(starts_at)) {
      throw new Error('Invalid trip end date')
    }

    const trip = await prisma.trip.create({
      data: {
        destination,
        starts_at,
        ends_at
      }
    })

    const mail = await getMailClient()

    const message = await mail.sendMail({
      from: {
        name: 'Equipe plann.er',
        address: 'oi@plann.er.com'
      },
      to: {
        name: owner_name,
        address: owner_email
      },
      subject: 'Teste de envio de e-mail',
      html: `<p>Teste de e-mail</p>`
    })

    console.log(nodemailer.getTestMessageUrl(message))

    return { tripId: trip.id }
  })
}