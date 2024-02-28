const icalendar = require('ical-generator');
const moment = require('moment');

//@ts-ignore
export default function handler(req, res) {
  if (req.method !== 'GET') {
    return new Response('Method Not Allowed', {
        headers: { Allow: 'GET' },
        status: 405,
    });
  }

  const filename = 'calendar.ics';

  try {
      const calendar = icalendar({
          prodId: '//aufdiestrasse//ical-generator//DE',
          events: [
            {
              start: moment.unix('1706205600'),
              end: moment.unix('1706212800'),
              summary: "Austellung - Auf die Straße",
              description: "In dieser interaktiven Wanderausstellung stellst du Klimaaktivist:innen Fragen über ihre Arbeit, lernst mehr über Klimaaktivismus und entscheidest, wie weit du selbst für den Protest gehen möchtest. Mit der multimedialen Ausstellung und einem breiten Rahmenprogramm treten wir gemeinsam in den aktuellen Klimaaktivismus-Diskurs in Deutschland ein.",
              url: 'https://www.aufdiestrasse.info/'
            }
  ]
      });

      return new Response(calendar.toString(), {
          headers: {
              'Content-Type': 'text/calendar; charset=utf-8',
              'Content-Disposition': `attachment; filename='${filename}'`,
          },
          status: 200,
      });
  } catch (err) {
      console.error(err);
      return new Response(JSON.stringify(err), { status: 500 });
  }
}