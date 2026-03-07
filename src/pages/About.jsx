import StudentCard from "../components/StudentCard";

export default function About() {
    return (
        <div className="page">
            <h2>About This Portal</h2>
            <p>
                The Student Management Portal is a beginner-friendly React project
                designed to demonstrate core concepts like components, props, PropTypes,
                defaultProps, CSS Modules, routing, forms, hooks, API integration, and
                CRUD operations in one mini project.
            </p>

            <h3 style={{ marginTop: "28px", marginBottom: "16px", color: "#1a1a2e" }}>
                Meet Our Students
            </h3>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                <StudentCard
                    name="Alice Johnson"
                    age={20}
                    course="Computer Science"
                />
                <StudentCard
                    name="Bob Smith"
                    age={22}
                    course="Mathematics"
                />
                <StudentCard
                    name="Carol White"
                    age={21}
                    course="Physics"
                />
                <StudentCard />
            </div>

            <p style={{ marginTop: "20px", fontSize: "0.9rem", color: "#666" }}>
                The last card is rendered without props, so the component shows its
                default values.
            </p>
        </div>
    );
}