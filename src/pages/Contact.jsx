import StudentForm from "../components/StudentForm";

export default function Contact() {
  return (
    <div className="page">

      {/* ── Page Header ── */}
      <div className="page-header">
        <h2>Contact & Enrollment</h2>
        <p>
          Fill out the form below to enroll a student or get in touch with
          the administration. All fields are required.
        </p>
      </div>

      {/* ── Contact Info ── */}
      <div className="section-card">
        <div className="section-card-header">
          <span className="section-card-icon">📬</span>
          <span className="section-card-title">Contact Information</span>
        </div>
        <div className="section-card-body">
          <ul className="contact-info-list">
            <li className="contact-info-item">
              <span className="contact-info-icon">📧</span>
              <span>admin@studentportal.com</span>
            </li>
            <li className="contact-info-item">
              <span className="contact-info-icon">🏢</span>
              <span>Administration Office, Block A</span>
            </li>
            <li className="contact-info-item">
              <span className="contact-info-icon">🕐</span>
              <span>Mon – Fri, 9:00 AM – 5:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      {/* ── Enrollment Form ── */}
      <div className="section-card">
        <div className="section-card-header">
          <span className="section-card-icon">📝</span>
          <span className="section-card-title">Enrollment Form</span>
        </div>
        <div className="section-card-body">
          <StudentForm />
        </div>
      </div>

    </div>
  );
}