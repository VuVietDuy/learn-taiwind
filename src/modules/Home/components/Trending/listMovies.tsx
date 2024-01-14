export interface Movie {
  src: string;
  title: string;
  main: string;
  runtime: string;
}

export const listMovies: Movie[] = [
  {
    src: "/images/batman_begins.jpg",
    title: "Batman Begins",
    main: "Christian Bale",
    runtime: "120m",
  },
  {
    src: "/images/dune.jpg",
    title: "Dune",
    main: "Timothée Chalamet",
    runtime: "120m",
  },
  {
    src: "/images/sing_2.jpg",
    title: "Sing 2",
    main: "Matthew McConaughey",
    runtime: "120m",
  },
  {
    src: "/images/spider_man.jpg",
    title: "Spider-Man: No Way Home",
    main: "Tom Holland",
    runtime: "120m",
  },
  {
    src: "/images/the_dark_knight_rises.jpg",
    title: "The Dark Knight Rises",
    main: "Christian Bale",
    runtime: "120m",
  },
  {
    src: "/images/the_dark_knight.jpg",
    title: "The Dark Knight",
    main: "Christian Bale",
    runtime: "120m",
  },
];
