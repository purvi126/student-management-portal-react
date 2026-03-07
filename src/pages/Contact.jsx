import StudentForm from "../components/StudentForm";

export default function Contact() {
    return (
        <div className="page">

            <h2>Contact & Enrollment</h2>
            <p style={{ marginBottom: "24px" }}>
                Fill out the form below to enroll a student or get in touch with the
                administration. All fields are required.
            </p>

            <StudentForm />

        </div>
    );
}