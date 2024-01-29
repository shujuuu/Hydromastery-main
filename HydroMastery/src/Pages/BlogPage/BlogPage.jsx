import useBreadcrumb from "../../Hooks/useBreadcrumb"

export default function BlogPage() {
    const BreadCrumb = useBreadcrumb('Blog');
    return <div style={{minHeight: '100vh'}}>

            {BreadCrumb}

            <section className="inner-page">
            <div className="container">
                <p>
                Example inner page template
                </p>
            </div>
            </section>

        </div>
}