import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

import { teamMembers } from './data';

export default function MeetTheTeam() {
  return (
    <section id="meet-the-team" className="py-16 px-6 md:px-8 bg-gray-50 rounded-xl max-w-7xl mx-auto my-32">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-kindred font-extrabold text-gray-900 mb-4">Meet the Team</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          As your dedicated nail artist, I pour my heart into every detail. And with my sweet furry assistant, we ensure your time here is not only about beautiful nails but also about ultimate comfort and a friendly vibe.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto items-stretch">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white p-8 rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg h-full"
          >
            <div className="relative w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-gray-200 flex-shrink-0">
              <Image
                src={member.image}
                alt={member.name}
                fill
                style={{ objectFit: 'cover' }}
                objectPosition="top"
                priority={index === 0}
              />
            </div>
            <h3 className="text-2xl font-kindred font-bold text-gray-900 mb-2">{member.name}</h3>
            <p className="text-primary font-semibold mb-4">{member.title}</p>
            <div className="text-gray-600 mb-6 leading-relaxed flex-grow">
              <ReactMarkdown>{member.bio}</ReactMarkdown>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}