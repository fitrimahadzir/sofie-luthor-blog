import type { Post } from '../types/post'

export const demoAuthors: Record<string, { name: string; bio: string; avatar: string }> = {
  sofie: {
    name: 'Sofie Luthor',
    bio: 'Founder of the school and lifelong dancer. Sofie writes about movement, mindset and the joy of dancing.',
    avatar: '/images/danceschool2-testimonials1.jpg',
  },
  kevin: {
    name: 'Kevin Perry',
    bio: 'Hip-hop and breakdance teacher with 15 years on the floor. Loves vinyl, sneakers and big moves.',
    avatar: '/images/danceschool2-testimonials2.jpg',
  },
  alice: {
    name: 'Alice Boyd',
    bio: 'Jazz, modern and kids dance teacher. Believer that everyone can dance — even you.',
    avatar: '/images/danceschool2-testimonials3.jpg',
  },
  brandon: {
    name: 'Brandon Ross',
    bio: 'Ballroom specialist and competition coach. Salsa on Saturdays, waltz on Sundays.',
    avatar: '/images/danceschool2-testimonials1.jpg',
  },
}

export const demoPosts: Post[] = [
  {
    id: 1,
    slug: 'dance-is-the-hidden-language-of-the-soul',
    title: 'Dance Is the Hidden Language of the Soul',
    excerpt:
      'Fusce ut velit laoreet, tempus arcu eu, molestie tortor. Nam vel justo cursus, faucibus lorem eget, egestas eros. Why movement says what words cannot.',
    content: `<p>Fusce ut velit laoreet, tempus arcu eu, molestie tortor. Nam vel justo cursus, faucibus lorem eget, egestas eros. Maecenas eleifend erat at justo fringilla imperdiet id ac magna.</p>
<p>Dance is one of the oldest ways humans communicate. Long before spoken language, movement carried meaning — joy, fear, celebration, belonging. When we dance, we speak without filters.</p>
<blockquote>The job of feet is walking, but their hobby is dancing.</blockquote>
<h2>Why movement matters</h2>
<p>Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Dancing releases tension, builds confidence and connects us to others in ways conversation never can.</p>
<ul>
<li>Boosts mood and reduces stress</li>
<li>Improves coordination and posture</li>
<li>Creates real community</li>
</ul>
<h2>Start small</h2>
<p>You do not need to be great to start. You need to start to be great. Come to a class, feel the music, and let your body find its own rhythm.</p>`,
    date: '2026-08-01T09:00:00',
    author: 'sofie',
    image: '/images/danceschool2-pic1.jpg',
    categories: ['Dance Styles'],
  },
  {
    id: 2,
    slug: 'getting-started-with-ballroom-dancing',
    title: 'Getting Started with Ballroom Dancing',
    excerpt:
      'Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus mi vel maximus justo. Everything a complete beginner needs to know about ballroom.',
    content: `<p>Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus mi vel maximus justo lectus. Ballroom dancing sounds intimidating, but the truth is far simpler: it is two people, one song and a shared step.</p>
<h2>Pick your first style</h2>
<p>Most beginners start with the waltz or the foxtrot. Both are slower, structured and forgiving. Once you feel comfortable, the rumba and tango open a whole new world of drama and play.</p>
<ul>
<li><strong>Waltz</strong> — the classic, elegant and smooth</li>
<li><strong>Foxtrot</strong> — smooth and conversational</li>
<li><strong>Rumba</strong> — slow, expressive, romantic</li>
<li><strong>Tango</strong> — sharp, dramatic and fun</li>
</ul>
<h2>What to wear</h2>
<p>Comfortable clothes and shoes that slide a little. Heels can wait — first, feel the floor with flat, supportive footwear.</p>
<blockquote>Every dance begins with a single step.</blockquote>
<p>Come alone or bring a partner. Nobody is ever turned away from a ballroom floor.</p>`,
    date: '2026-07-24T10:00:00',
    author: 'brandon',
    image: '/images/danceschool2-pic3.jpg',
    categories: ['Dance Styles', 'Ballroom'],
  },
  {
    id: 3,
    slug: 'jazz-and-modern-dance-for-absolute-beginners',
    title: 'Jazz & Modern Dance for Absolute Beginners',
    excerpt:
      'Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. How jazz and modern classes build strength, style and freedom.',
    content: `<p>Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Jazz and modern dance share one obsession: freedom of expression.</p>
<h2>Jazz</h2>
<p>Jazz is sharp, syncopated and full of attitude. Big isolations, strong lines and music that makes you want to move. It is the perfect style for building rhythm and stage presence.</p>
<h2>Modern</h2>
<p>Modern dance throws the rulebook away. It uses gravity, breath and emotion. Great for anyone who wants to feel every step instead of just performing it.</p>
<blockquote>Don't be afraid to look silly. Be afraid of never trying.</blockquote>
<h2>What beginners should know</h2>
<ul>
<li>Wear socks or soft shoes</li>
<li>Stretch before class</li>
<li>Give yourself six weeks before judging progress</li>
</ul>
<p>Every expert was once a beginner. The studio is the safest place in the world to try something new.</p>`,
    date: '2026-07-15T09:30:00',
    author: 'alice',
    image: '/images/danceschool2-pic2.jpg',
    categories: ['Dance Styles', 'Jazz & Modern'],
  },
  {
    id: 4,
    slug: 'meet-our-team-25-years-on-the-dance-floor',
    title: 'Meet Our Team: 25 Years on the Dance Floor',
    excerpt:
      'Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod nisl suscipit ligula volutpat. The people behind the studio and what drives them.',
    content: `<p>Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod nisl suscipit ligula volutpat, a feugiat urna maximus. For 25 years we have been dancing, teaching and growing together.</p>
<h2>Kevin Perry</h2>
<p>Hip-hop and breakdance teacher, fifteen years on the floor. Kevin believes every street move tells a story — you just have to listen with your feet.</p>
<h2>Alice Boyd</h2>
<p>Jazz, modern and kids dance teacher. Alice turned a childhood hobby into a career and has never looked back. She teaches with a simple promise: everyone can dance.</p>
<h2>Brandon Ross</h2>
<p>Ballroom specialist and competition coach. Brandon has trained champions and absolute beginners — and says he is equally proud of both.</p>
<blockquote>25 years of experience. We are still the same kids who fell in love with music.</blockquote>
<p>Come say hello. The kettle is always on between classes.</p>`,
    date: '2026-07-08T14:00:00',
    author: 'sofie',
    image: '/images/danceschool2-pic5.jpg',
    categories: ['Team', 'News'],
  },
  {
    id: 5,
    slug: 'why-kids-should-start-dancing-early',
    title: 'Why Kids Should Start Dancing Early',
    excerpt:
      'Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus mi vel. The physical, social and emotional benefits of dance classes for children aged 2 to 8.',
    content: `<p>Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus mi vel maximus justo lectus. Dance classes for young children are about far more than learning steps.</p>
<h2>Confidence before choreography</h2>
<p>At four years old, standing in front of a mirror and copying a rhythm builds the kind of confidence that carries into classrooms and playgrounds for a lifetime.</p>
<h2>What kids gain</h2>
<ul>
<li>Coordination and balance</li>
<li>Listening and following instructions</li>
<li>Friendship and teamwork</li>
<li>Self-expression without words</li>
</ul>
<blockquote>Watch a child dance and you will remember why you started.</blockquote>
<h2>Keep it playful</h2>
<p>The best kids classes feel like play, not practice. Music, games and gentle structure — that is the recipe we have used for two decades.</p>`,
    date: '2026-06-28T11:00:00',
    author: 'alice',
    image: '/images/danceschool2-pic6.jpg',
    categories: ['Tips', 'Kids'],
  },
  {
    id: 6,
    slug: 'workshop-recap-a-flamenco-weekend',
    title: 'Workshop Recap: A Flamenco Weekend',
    excerpt:
      'Finibus, eleifend mi vel maximus justo lectus. What happened when the studio filled with castanets, stomps and a whole lot of passion.',
    content: `<p>Finibus, eleifend mi vel maximus justo lectus. Last weekend we turned the studio into a little corner of Andalusia for two days of flamenco.</p>
<h2>Day one: rhythm first</h2>
<p>We started with the compás — the heartbeat of flamenco. Hands clapping, feet stomping, everyone learning that rhythm lives in the body before it ever reaches the instrument.</p>
<h2>Day two: putting it together</h2>
<p>Arms, posture, and the fierce joy of the baile. By the end of Sunday, absolute beginners were performing short sequences with real fire.</p>
<blockquote>Flamenco is not a style. It is a feeling with a tempo.</blockquote>
<h2>Next workshops</h2>
<p>Join us for Tango on 22–24 June, Foxtrot on 26–29 June and Rumba in August. Book your spot — places go fast.</p>`,
    date: '2026-06-20T13:00:00',
    author: 'brandon',
    image: '/images/danceschool2-pic7.jpg',
    categories: ['Workshops', 'News'],
  },
]
