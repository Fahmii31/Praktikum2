import Navbar from "@/app/components/Navbar";
import BlogCard from "./components/BlogCard";

interface BlogProp {
    params: { id: string, title: string };
}

export default function BlogDetail({ params }: BlogProp) {
    return (
        <>
        <Navbar></Navbar>
        <div>
            <BlogCard title={`ID : ${params.id}`} description={`Title : ${params.title}`}/>
            <BlogCard title={`ID : ${params.id}`} description={`Title : ${params.title}`}/>
        </div>
        </>
    );
}