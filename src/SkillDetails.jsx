import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const skillDetails = {
    java: {
        title: 'Java',
        subtitle: 'Core Programming',
        topics: [
            'Object-Oriented Programming',
            'Classes, Objects and Constructors',
            'Inheritance and Polymorphism',
            'Exception Handling',
            'Collections Framework',
            'Generics and Stream API',
            'Multithreading and Concurrency',
            'Java 8+ Features',
        ],
    },
    'spring-boot': {
        title: 'Spring Boot',
        subtitle: 'Backend Development',
        topics: [
            'Dependency Injection and IoC',
            'Beans and Application Context',
            'REST API Development',
            'Request Parameters and Path Variables',
            'DTOs and Validation',
            'Spring Data JPA',
            'Spring Security and JWT',
        ],
    },
    'rest-apis': {
        title: 'REST APIs',
        subtitle: 'API Development',
        topics: [
            'HTTP Methods and Status Codes',
            'GET, POST, PUT, PATCH and DELETE',
            'Request and Response Handling',
            'Path Variables and Query Parameters',
            'DTOs and JSON',
            'Exception Handling',
        ],
    },
    microservices: {
        title: 'Microservices',
        subtitle: 'Backend Architecture',
        topics: [
            'Microservice Architecture Fundamentals',
            'Service Responsibilities',
            'REST-based Communication',
            'Apache Kafka Fundamentals',
        ],
    },
    mysql: {
        title: 'MySQL',
        subtitle: 'Database',
        topics: [
            'CRUD Operations',
            'Joins and Subqueries',
            'Primary and Foreign Keys',
            'Indexes and Constraints',
            'Normalization',
            'Aggregate Functions',
        ],
    },
    'apache-kafka': {
        title: 'Apache Kafka',
        subtitle: 'Messaging',
        topics: [
            'Topics and Partitions',
            'Producers and Consumers',
            'Consumer Groups',
            'Event-driven Communication',
        ],
    },
    'git-maven': {
        title: 'Git & Maven',
        subtitle: 'Development Tools',
        topics: [
            'Git Add, Commit and Push',
            'Branches and Merging',
            'GitHub Repository Workflow',
            'Maven Dependencies',
            'Maven Build Lifecycle',
        ],
    },
    aws: {
        title: 'AWS & Cloud Services',
        subtitle: 'Cloud Infrastructure',
        topics: [
            'Amazon EC2',
            'Amazon S3',
            'AWS IAM',
            'Amazon RDS',
            'Amazon CloudWatch',
            'Amazon ECS / ECR',
            'AWS Lambda',
        ],
    },
}

export default function SkillDetails() {
    const { skillSlug } = useParams()
    const skill = skillDetails[skillSlug]

    if (!skill) {
        return (
            <main className="skill-detail-page">
                <Link to="/">← Back to portfolio</Link>
                <h1>Skill not found</h1>
            </main>
        )
    }

    return (
        <main className="skill-detail-page">
            <Link to="/" className="skill-back-link">
                <ArrowLeft size={16} /> Back to portfolio
            </Link>

            <p className="eyebrow">TECHNICAL SKILLS / DETAILS</p>
            <h1>{skill.title}</h1>
            <p className="skill-detail-subtitle">{skill.subtitle}</p>

            <div className="skill-detail-grid">
                {skill.topics.map((topic, index) => (
                    <article className="skill-detail-card" key={topic}>
                        <span>{String(index + 1).padStart(2, '0')}</span>
                        <h2>{topic}</h2>
                    </article>
                ))}
            </div>
        </main>
    )
}