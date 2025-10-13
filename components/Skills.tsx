import React from 'react';

interface Skill {
  name: string;
  logo: string;
}

const SkillsCarousel: React.FC = () => {
  const allSkills: Skill[] = [
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Prisma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg' },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Github', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Recoil', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/recoil/recoil-original.svg' },
    { name: 'Postman', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
    { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'Websocket', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg' },
    { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg' },
    { name: 'Grafana', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg' },
    { name: 'Nginx', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' },
    { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
    { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Webpack', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg' },
    { name: 'Jest', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg' },
    { name: 'GitLab', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg' },
    { name: 'Cloudflare', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg' },
    { name: 'Vercel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg' },
    { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Terraform', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg' },
    { name: 'Jenkins', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
    { name: 'GraphQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
  ];

  // Split skills into two arrays for dual carousel
  const midPoint = Math.ceil(allSkills.length / 2);
  const firstHalf = allSkills.slice(0, midPoint);
  const secondHalf = allSkills.slice(midPoint);

  // Triple duplication for seamless infinite scroll across wider screens
  const duplicatedFirstHalf = [...firstHalf, ...firstHalf, ...firstHalf];
  const duplicatedSecondHalf = [...secondHalf, ...secondHalf, ...secondHalf];

  return (
    <div className="w-full bg-transparent py-12 px-0">
      <div className="w-full">
        <div className="space-y-8">
          {/* First Carousel - Moving Forward */}
          <div className="relative overflow-hidden">
            {/* Scrolling container */}
            <div className="flex animate-scroll-forward gap-12">
              {duplicatedFirstHalf.map((skill, idx) => (
                <div
                  key={`forward-${skill.name}-${idx}`}
                  className="flex-shrink-0 group cursor-pointer"
                >
                  <div className="flex flex-col items-center justify-center p-8 transition-all duration-500 hover:scale-125">
                    <div className="relative">
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Logo container */}
                      <div className="relative w-20 h-20 flex items-center justify-center">
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100"
                        />
                      </div>
                    </div>

                    <p className="text-sm font-medium text-gray-500 group-hover:text-white transition-all duration-300 mt-4 opacity-0 group-hover:opacity-100">
                      {skill.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Carousel - Moving Backward (Reverse) */}
          <div className="relative overflow-hidden">
            {/* Scrolling container */}
            <div className="flex animate-scroll-backward gap-12">
              {duplicatedSecondHalf.map((skill, idx) => (
                <div
                  key={`backward-${skill.name}-${idx}`}
                  className="flex-shrink-0 group cursor-pointer"
                >
                  <div className="flex flex-col items-center justify-center p-8 transition-all duration-500 hover:scale-125">
                    <div className="relative">
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Logo container */}
                      <div className="relative w-20 h-20 flex items-center justify-center">
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100"
                        />
                      </div>
                    </div>

                    <p className="text-sm font-medium text-gray-500 group-hover:text-white transition-all duration-300 mt-4 opacity-0 group-hover:opacity-100">
                      {skill.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scrollForward {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        @keyframes scrollBackward {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-scroll-forward {
          animation: scrollForward 40s linear infinite;
        }
        
        .animate-scroll-backward {
          animation: scrollBackward 35s linear infinite;
        }
        
        .animate-scroll-forward:hover,
        .animate-scroll-backward:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default SkillsCarousel;