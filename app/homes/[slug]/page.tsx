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
    ofstedReportUrl: "/ofsted/ivy-inspection-report.pdf",
    registrationCertUrl: null,
    ofstedPageUrl: "https://reports.ofsted.gov.uk/provider/2/2827996",
    vimeoUrl: "https://player.vimeo.com/video/1210854792",
    gallery: Array.from({ length: 32 }, (_, i) =>
      `/homes/ivy/Ivy Cottage-${i + 1}.jpg`
    ),
  },
  {
    slug: "holly-tree-cottage",
    name: "Holly Tree Cottage",
    urn: "2827926",
    location: "Sellindge, East Kent",
    beds: 1,
    type: "Solo Home",
    status: "Open",
    ofstedRating: "Good",
    ofstedDate: null,
    summary: "A solo placement for higher-complexity children who benefit from a dedicated, low-arousal environment.",
    description: "Holly Tree Cottage operates as a single-placement home in East Kent, designed for children who benefit from a calm, low-arousal environment with a dedicated team. This model allows for a highly individualised approach to care, with staff focused entirely on the needs of one child. Holly Tree Cottage is particularly suited to children with higher-complexity presentations who thrive with consistency, reduced stimulation and intensive relational support.",
    image: "/homes/holly-tree-cottage.jpg",
    ofstedReportUrl: "/ofsted/holly-monitoring-report.pdf",
    registrationCertUrl: "/ofsted/holly-registration-certificate.pdf",
    ofstedPageUrl: "https://reports.ofsted.gov.uk/provider/2/2827926",
    vimeoUrl: "https://player.vimeo.com/video/1210854152",
    gallery: Array.from({ length: 21 }, (_, i) =>
      `/homes/holly/Holy Tree Cottage-${i + 1}.jpg`
    ),
  },
];

export function generateStaticParams() {
  return HOMES.map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const home = HOMES.find((h) => h.slug === slug);
  if (!home) return {};
  return {
    title: `${home.name} | Nurturing Nests Care`,
    description: home.summary,
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const home = HOMES.find((h) => h.slug === slug);
  if (!home) notFound();
  return (
    <>
      <SiteNav />
      <HomeDetailPage home={home} />
    </>
  );
}
