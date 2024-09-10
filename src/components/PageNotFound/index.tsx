const PageNotFound = () => {
  return (
    <main>
      <div className="mx-auto -mt-10 flex h-screen max-w-screen-xl items-center justify-start px-4 md:px-8">
        <div className="mx-auto max-w-lg space-y-5 text-center">
          <h3 className="font-semibold text-primary">
            Cette page est en maintenance
          </h3>
          <p className="text-4xl font-semibold dark:text-white sm:text-5xl">
            Pas d'informations sur cette page pour le moment.
          </p>
          <p className="text-body-color">
            Sorry, the page you are looking for could not be found.
          </p>
          <div className="flex flex-wrap items-center justify-center">
            <a
              href="/"
              className="block rounded-lg bg-primary px-4 py-2 font-medium text-white duration-150 hover:bg-primary/65 active:bg-primary/60"
            >
              Accueil
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};
export default PageNotFound;
