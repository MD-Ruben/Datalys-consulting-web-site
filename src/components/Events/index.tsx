import React from "react";

const events = [
  {
    title: "Event 1",
    desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks. I realized today that I have all this stuff that",
    img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    authorLogo: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
    authorName: "Sidi dev",
    date: "Jan 4 2022",
    href: "javascript:void(0)",
  },
  {
    title: "Event 2",
    desc: "According to him, â€œI'm still surprised that this has happened. But we are surprised because we are so surprised.â€More revelations about Whittington will be featured in the film",
    img: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    authorLogo: "https://api.uifaces.co/our-content/donated/FJkauyEa.jpg",
    authorName: "Micheal",
    date: "Jan 4 2022",
    href: "javascript:void(0)",
  },
  {
    title: "Event 3",
    desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks. I realized today that I have all this stuff that",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    authorLogo: "https://randomuser.me/api/portraits/men/46.jpg",
    authorName: "Luis",
    date: "Jan 4 2022",
    href: "javascript:void(0)",
  },
  {
    title: "Event 4",
    desc: "The powerful gravity waves resulting from the impact of the planets' moons â€” four in total â€” were finally resolved in 2015 when gravitational microlensing was used to observe the",
    img: "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    authorLogo: "https://api.uifaces.co/our-content/donated/KtCFjlD4.jpg",
    authorName: "Lourin",
    date: "Jan 4 2022",
    href: "javascript:void(0)",
  },
];

const Events = () => {
  return (
    <section className="mx-auto mt-12 max-w-screen-xl px-4 py-9 md:px-8">
      <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((items, key) => (
          <article
            className="mx-auto mt-4 max-w-md rounded-md border shadow-lg duration-300 hover:shadow-sm"
            key={key}
          >
            <a href={items.href}>
              <img
                src={items.img}
                loading="lazy"
                alt={items.title}
                className="h-48 w-full rounded-t-md"
              />
              <div className="ml-4 mr-2 mt-2 flex items-center pt-3">
                <div className="h-10 w-10 flex-none rounded-full">
                  <img
                    src={items.authorLogo}
                    className="h-full w-full rounded-full"
                    alt={items.authorName}
                  />
                </div>
                <div className="ml-3">
                  <span className="block text-white">{items.authorName}</span>
                  <span className="block text-sm text-gray-400">
                    {items.date}
                  </span>
                </div>
              </div>
              <div className="mb-3 ml-4 mr-2 pt-3">
                <h3 className="text-xl text-white">{items.title}</h3>
                <p className="mt-1 text-sm text-gray-400">{items.desc}</p>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Events;
