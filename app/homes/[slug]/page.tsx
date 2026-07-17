import { notFound } from "next/navigation";
import SiteNav from "../../components/home/SiteNav";
import HomeDetailPage from "../../components/home/HomeDetailPage";

const HOMES = [
  {
    slug: "ivy-cottage",
    name: "Ivy Cottage",
    urn: "2827996",
    location: "Sellindge, East Kent",
    beds: 2,
    type: "Children's Home",
    status: "Open",
    ofstedRating: "Good",
    ofstedDate: "May 2026",
    summary: "A warm, structured two-bed home supporting children with emotional, behavioural and relational needs in East Kent.",
    description: "Ivy Cottage is a two-bed registered children's home in East Kent, providing structured, therapeutic residential care for children aged 8–17 with emotional, behavioural and relational needs. The home operates with high staffing ratios and a consistent team trained in relational and trauma-informed practice. Children at Ivy Cottage benefit from stable routines, key worker relationships, and access to education, activities and community support.",
    image: "/homes/ivy-cottage.jpg",
    ofstedReportUrl: "/Ivy%20Cottage%20CH%20Full%2010442530%20FINAL.pdf",
  },
  {
    slug: "holly-tree-cottage",
    name: "Holly Tree Cottage",
    urn: "2827997",
    location: "Sellindge, East Kent",
    beds: 1,
    type: "Solo Home",
    status: "Open",
    ofstedRating: "Good",
    ofstedDate: null,
    summary: "A solo placement for higher-complexity children who benefit from a dedicated, low-arousal environment.",
    description: "Holly Tree Cottage operates as a single-placement home in East Kent, designed for children who benefit from a calm, low-arousal environment with a dedicated team. This model allows for a highly individualised approach to care, with staff focused entirely on the needs of one child. Holly Tree Cottage is particularly suited to children with higher-complexity presentations who thrive with consistency, reduced stimulation and intensive relational support.",
    image: "/homes/holly-tree-cottage.jpg",
    ofstedReportUrl: null,
  },
];

export function generateStaticParams() {
  return HOMES.map((h) => ({ slug: h.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const home = HOMES.find((h) => h.slug === params.slug);
  if (!home) return {};
  return {
    title: `${home.name} | Nurturing Nests Care`,
    description: home.summary,
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const home = HOMES.find((h) => h.slug === params.slug);
  if (!home) notFound();
  return (
    <>
      <SiteNav />
      <HomeDetailPage home={home} />
    </>
  );
}
