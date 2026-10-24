
import React from "react";
import { Link, useParams } from "react-router-dom";
import {
    ArrowLeft,
    ArrowUpRight,
    Database,
    MapPin,
    Braces,
    Server,
    Layers3,
    CheckCircle2,
} from "lucide-react";

const projectDetails = {
    ofis: {
        title: "OFIS — Farmer Information System",
        subtitle: "Field Data Management · Backend Microservices",
        overview:
            "OFIS is a field operations platform for collecting farmer and farm information, recording GPS points for farms and social infrastructure, managing training activities, and tracking transactions.",
        role:
            "Java Backend Developer — development and maintenance of backend services, bug fixing, testing, and deployment of existing software.",
        problem:
            "Field operations require structured collection of farmer and farm data, location information, training activities, and transaction records in one workflow.",
        solution:
            "The platform supports field-data collection and operational tracking. The exact service boundaries and implementation details should reflect the work performed in the actual project.",
        stack: [
            "Java",
            "Spring Boot",
            "Microservices",
            "MySQL",
            "Apache Kafka",
        ],
        modules: [
            {
                title: "Farmer & Farm Data",
                description:
                    "Supports recording and managing farmer and farm information collected by field staff.",
                icon: Database,
            },
            {
                title: "GPS & Infrastructure",
                description:
                    "Records GPS points associated with farms and social infrastructure.",
                icon: MapPin,
            },
            {
                title: "Training Activities",
                description:
                    "Supports the management and tracking of training activities.",
                icon: CheckCircle2,
            },
            {
                title: "Transactions",
                description:
                    "Supports tracking of transaction-related information within the field operations workflow.",
                icon: Layers3,
            },
        ],
        flow: [
            "Field Staff",
            "Backend Services",
            "Data Persistence",
        ],
        responsibilities: [
            "Implemented and maintained backend microservices.",
            "Fixed bugs in existing application functionality.",
            "Tested backend changes before deployment.",
            "Supported deployment of existing software.",
        ],
        notes:
            "The architecture diagram is conceptual. Confirm actual service communication, database ownership, and Kafka usage before presenting them as implementation specifics.",
    },

    "spring-boot-rest-api": {
        title: "Spring Boot REST API",
        subtitle: "Backend Development · REST API Design",
        overview:
            "A backend API project demonstrating layered application structure, request and response handling, DTO-based data transfer, and database persistence using Spring Boot.",
        role:
            "Backend implementation focused on controller, service, and repository separation, API behavior, and persistence.",
        problem:
            "Backend APIs need clear responsibilities, predictable request and response structures, and a maintainable way to interact with stored data.",
        solution:
            "A layered Spring Boot design separates HTTP handling, business logic, and database access. DTOs help define the data exchanged through API endpoints.",
        stack: [
            "Java",
            "Spring Boot",
            "Spring Data JPA",
            "MySQL",
            "REST APIs",
        ],
        modules: [
            {
                title: "Controller Layer",
                description:
                    "Handles HTTP requests and maps API inputs to application operations.",
                icon: Braces,
            },
            {
                title: "Service Layer",
                description:
                    "Keeps business logic separate from HTTP handling and persistence code.",
                icon: Server,
            },
            {
                title: "Repository Layer",
                description:
                    "Uses Spring Data JPA for database access and entity persistence.",
                icon: Database,
            },
            {
                title: "DTOs & Responses",
                description:
                    "Defines structured request and response objects for API communication.",
                icon: Layers3,
            },
        ],
        flow: [
            "HTTP Request",
            "Controller → Service",
            "Repository → Database",
            "HTTP Response",
        ],
        responsibilities: [
            "Designed or implemented REST endpoint behavior.",
            "Separated controller, service, and repository responsibilities.",
            "Worked with DTO-based request and response structures.",
            "Implemented or maintained database persistence.",
        ],
        notes:
            "Only list endpoints, validation rules, error-handling behavior, and features that are actually implemented in your project.",
    },
};

export default function ProjectDetails() {
    const { projectSlug } = useParams();
    const project = projectDetails[projectSlug];

    if (!project) {
        return (
            <main className="project-detail-page">
                <Link to="/" className="project-back-link">
                    <ArrowLeft size={16} />
                    Back to portfolio
                </Link>
                <h1>Project not found</h1>
                <p>The requested project page does not exist.</p>
            </main>
        );
    }

    return (
        <main className="project-detail-page">
            <div className="project-detail-shell">
                <Link to="/#work" className="project-back-link">
                    <ArrowLeft size={16} />
                    Back to selected work
                </Link>

                <header className="project-detail-header">
                    <p className="project-detail-eyebrow">
                        PROJECT CASE FILE / {projectSlug.toUpperCase()}
                    </p>
                    <h1>{project.title}</h1>
                    <p className="project-detail-subtitle">{project.subtitle}</p>

                    <div className="project-detail-tags">
                        {project.stack.map((item) => (
                            <span key={item}>{item}</span>
                        ))}
                    </div>
                </header>

                <section className="project-detail-section">
                    <p className="project-detail-label">01 / OVERVIEW</p>
                    <h2>What the project does</h2>
                    <p>{project.overview}</p>
                </section>

                <section className="project-detail-section">
                    <p className="project-detail-label">02 / PROBLEM & SOLUTION</p>
                    <div className="project-detail-two-column">
                        <article>
                            <h3>The problem</h3>
                            <p>{project.problem}</p>
                        </article>
                        <article>
                            <h3>The approach</h3>
                            <p>{project.solution}</p>
                        </article>
                    </div>
                </section>

                <section className="project-detail-section">
                    <p className="project-detail-label">03 / FUNCTIONAL AREAS</p>
                    <h2>Core modules</h2>
                    <div className="project-module-grid">
                        {project.modules.map((module) => {
                            const Icon = module.icon;

                            return (
                                <article className="project-module-card" key={module.title}>
                                    <Icon size={22} />
                                    <h3>{module.title}</h3>
                                    <p>{module.description}</p>
                                </article>
                            );
                        })}
                    </div>
                </section>

                <section className="project-detail-section">
                    <p className="project-detail-label">04 / ARCHITECTURE</p>
                    <h2>High-level flow</h2>
                    <div className="project-flow">
                        {project.flow.map((step, index) => (
                            <React.Fragment key={step}>
                                <div className="project-flow-step">{step}</div>
                                {index < project.flow.length - 1 && (
                                    <ArrowUpRight
                                        className="project-flow-arrow"
                                        size={20}
                                    />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                    <p className="project-detail-note">{project.notes}</p>
                </section>

                <section className="project-detail-section">
                    <p className="project-detail-label">05 / CONTRIBUTION</p>
                    <h2>My responsibilities</h2>
                    <p className="project-role">{project.role}</p>
                    <ul className="project-responsibility-list">
                        {project.responsibilities.map((item) => (
                            <li key={item}>
                                <CheckCircle2 size={18} />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                <footer className="project-detail-footer">
                    <span>JAVA BACKEND DEVELOPMENT</span>
                    <Link to="/#work">
                        Explore other projects <ArrowUpRight size={16} />
                    </Link>
                </footer>
            </div>
        </main>
    );
}
