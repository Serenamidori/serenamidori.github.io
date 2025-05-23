document.addEventListener('DOMContentLoaded', function(){
  renderSkills();
});

const skills = [
  { name: 'Ruby on Rails',  experience: '3+ years', id: 'ror' },
  { name: 'JavaScript',     experience: '7+ years', id: 'js' },
  { name: 'Java',           experience: '3+ years', id: 'java' },
  { name: 'HTML',           experience: '7+ years', id: 'html' },
  { name: 'CSS',            experience: '7+ years', id: 'css' },
  { name: 'PostgreSQL',     experience: '1+ years', id: 'postgres' },
  { name: 'MySQL',          experience: '2+ years', id: 'mysql' },
  { name: 'REST APIs',      experience: '6+ years', id: 'rest' },
  { name: 'Git',            experience: '8+ years', id: 'git' },
  { name: 'Node.js',        experience: '2+ years', id: 'node' },
  { name: 'Bootstrap',      experience: '7+ years', id: 'bootstrap' },
  { name: 'RSpec',          experience: '1+ years', id: 'rspec' },
  { name: 'JUnit',          experience: '2+ years', id: 'junit' },
  { name: 'Docker',         experience: '1+ years', id: 'docker' },
  { name: 'Redis',          experience: '1+ years', id: 'redis' },
  { name: 'SQL',            experience: '7+ years', id: 'sql' },
  { name: 'Sidekiq',        experience: '1+ years', id: 'sidekiq' },
  { name: 'Heroku',         experience: '3+ years', id: 'heroku' }
];

function renderSkills() {
  document.getElementById('skill-list').innerHTML = skills.map((skill) => {
    return `<button data-tooltip-target="tooltip-${ skill.id }" data-tooltip-style="light" class="pill rounded-lg text-sm font-bold">
              ${ skill.name }
            </button>
            <div id="tooltip-${ skill.id }" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-bold rounded-lg shadow-xs opacity-0 tooltip transform mb-2 w-max group-hover:opacity-100 transition-opacity duration-300">
              ${ skill.experience }
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>`

  }).join('');
  
  // Alternative using arrow function expression:
  // document.getElementById('list').innerHTML = persons.map(person => `<li>${ getFullName(person) }</li>`).join('');
  
}