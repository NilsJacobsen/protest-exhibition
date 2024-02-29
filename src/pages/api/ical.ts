// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import ical, {ICalCalendarMethod} from 'ical-generator';
import moment from 'moment';

type Data = {
  name: string
}

const calendar = ical({name: 'Auf die Straße - Ausstellung Dortmund'});
calendar.method(ICalCalendarMethod.REQUEST);

calendar.createEvent({
  start: moment.unix(1709830800),
  end: moment.unix(1711306800),
  summary: "Auf die Straße - Ausstellung Dortmund",
  description: "Kalendereintrag für den gesamten Ausstellungszeitraum.",
  url: 'https://diversity-ausstellung.de/'
});

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.writeHead(200, {
    'Content-Type': 'text/calendar; charset=utf-8',
    'Content-Disposition': 'attachment; filename="calendar.ics"'
  });
  res.end(calendar.toString());
}
