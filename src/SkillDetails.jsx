
import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const skillDetails = {
    java: {
        title: "Java",
        subtitle: "Core Programming",
        topics: [
            {
                title: "Object-Oriented Programming",
                description:
                    "Understand the four pillars of OOP: encapsulation, inheritance, polymorphism, and abstraction. These concepts help create reusable and maintainable applications.",
                example: `class Student {
    String name;

    void display() {
        System.out.println(name);
    }
}`,
            },
            {
                title: "Classes, Objects & Constructors",
                description:
                    "A class defines an object's structure and behavior. Objects are instances of classes, while constructors initialize objects when they are created.",
                example: `class Student {
    String name;

    Student(String name) {
        this.name = name;
    }
}

Student s = new Student("Abhishek");`,
            },
            {
                title: "Inheritance & Polymorphism",
                description:
                    "Inheritance allows a class to reuse another class's behavior. Polymorphism allows the same method call to behave differently depending on the object.",
                example: `class Animal {
    void sound() {
        System.out.println("Animal sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Bark");
    }
}`,
            },
            {
                title: "Exception Handling",
                description:
                    "Handle runtime errors using try, catch, finally, throw, and throws. Custom exceptions can represent application-specific error conditions.",
                example: `try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Invalid division");
} finally {
    System.out.println("Completed");
}`,
            },
            {
                title: "Collections Framework",
                description:
                    "Use List, Set, Queue, and Map to store and manage groups of objects. Understand ArrayList, LinkedList, HashSet, HashMap, and their trade-offs.",
                example: `List<String> names = new ArrayList<>();
names.add("Java");
names.add("Spring Boot");

Map<Integer, String> users = new HashMap<>();
users.put(1, "Abhishek");`,
            },
            {
                title: "Generics & Stream API",
                description:
                    "Generics provide compile-time type safety. Streams support declarative data processing through operations such as filter, map, sorted, and collect.",
                example: `List<Integer> numbers =
    Arrays.asList(1, 2, 3, 4, 5);

List<Integer> result = numbers.stream()
    .filter(n -> n % 2 == 0)
    .map(n -> n * n)
    .toList();`,
            },
            {
                title: "Multithreading & Concurrency",
                description:
                    "Learn threads, synchronization, ExecutorService, locks, and concurrent collections to build applications that perform multiple tasks safely.",
                example: `ExecutorService executor =
    Executors.newFixedThreadPool(2);

executor.submit(() ->
    System.out.println("Task running")
);

executor.shutdown();`,
            },
            {
                title: "Java 8+ Features",
                description:
                    "Work with lambda expressions, functional interfaces, method references, the Stream API, Optional, and modern date-time APIs.",
                example: `Optional<String> name =
    Optional.ofNullable("Abhishek");

name.ifPresent(System.out::println);`,
            },
        ],
    },

    "spring-boot": {
        title: "Spring Boot",
        subtitle: "Backend Application Development",
        topics: [
            {
                title: "Dependency Injection & IoC",
                description:
                    "Spring manages application objects and injects their dependencies. Constructor injection makes dependencies explicit and improves testability.",
                example: `@Service
class UserService {
    private final UserRepository repository;

    UserService(UserRepository repository) {
        this.repository = repository;
    }
}`,
            },
            {
                title: "Beans & Application Context",
                description:
                    "Beans are objects managed by Spring. The ApplicationContext creates, configures, and manages these beans and their dependencies.",
                example: `@Configuration
class AppConfig {
    @Bean
    GreetingService greetingService() {
        return new GreetingService();
    }
}`,
            },
            {
                title: "REST API Development",
                description:
                    "Build HTTP endpoints using controllers, map request methods, return responses, and separate controller, service, and repository responsibilities.",
                example: `@RestController
@RequestMapping("/api/users")
class UserController {
    @GetMapping
    public String getUsers() {
        return "Users";
    }
}`,
            },
            {
                title: "Request Parameters & Path Variables",
                description:
                    "Use @PathVariable to capture values from a URL path and @RequestParam to read query parameters.",
                example: `@GetMapping("/{id}")
public String getUser(
    @PathVariable Long id,
    @RequestParam(defaultValue = "false")
    boolean details
) {
    return "User: " + id;
}`,
            },
            {
                title: "DTOs & Validation",
                description:
                    "Use Data Transfer Objects to define API request and response structures. Bean Validation helps validate incoming data before processing.",
                example: `public record UserRequest(
    @NotBlank String name,
    @Email String email
) {}

// Controller parameter:
@Valid @RequestBody UserRequest request`,
            },
            {
                title: "Spring Data JPA",
                description:
                    "Use repositories to perform database operations with less boilerplate. Understand entities, IDs, derived query methods, and transactions.",
                example: `@Entity
class User {
    @Id
    @GeneratedValue
    private Long id;

    private String name;
}

interface UserRepository
    extends JpaRepository<User, Long> {
}`,
            },
            {
                title: "Spring Security & JWT",
                description:
                    "Understand authentication, authorization, password hashing, security filters, and token-based authentication for protected APIs.",
                example: `@Configuration
@EnableWebSecurity
class SecurityConfig {
    // Configure SecurityFilterChain
    // and authorization rules here.
}`,
            },
        ],
    },

    "rest-apis": {
        title: "REST APIs",
        subtitle: "HTTP & API Design",
        topics: [
            {
                title: "HTTP Methods & Status Codes",
                description:
                    "Understand HTTP request methods and status codes so APIs communicate success, validation failures, missing resources, and server errors clearly.",
                example: `GET    /api/products  -> 200 OK
POST   /api/products  -> 201 Created
GET    /api/missing   -> 404 Not Found
DELETE /api/products/1 -> 204 No Content`,
            },
            {
                title: "CRUD Operations",
                description:
                    "Implement Create, Read, Update, and Delete operations. Use PUT for replacing a resource and PATCH for partial updates.",
                example: `GET    /api/products
POST   /api/products
PUT    /api/products/1
PATCH  /api/products/1
DELETE /api/products/1`,
            },
            {
                title: "Request & Response Handling",
                description:
                    "Accept JSON request bodies, return meaningful responses, use suitable HTTP status codes, and keep API contracts consistent.",
                example: `@PostMapping
public ResponseEntity<ProductResponse> create(
    @Valid @RequestBody ProductRequest request
) {
    ProductResponse response = service.create(request);
    return ResponseEntity.status(201).body(response);
}`,
            },
            {
                title: "Path Variables & Query Parameters",
                description:
                    "Use path variables to identify resources and query parameters to filter, sort, paginate, or customize a request.",
                example: `GET /api/products/10
GET /api/products?category=books
GET /api/products?page=0&size=10`,
            },
            {
                title: "DTOs & JSON",
                description:
                    "Use DTOs to control the fields exposed by an API and serialize data into JSON without exposing internal persistence entities unnecessarily.",
                example: `public record ProductResponse(
    Long id,
    String name,
    double price
) {}`,
            },
            {
                title: "Exception Handling",
                description:
                    "Return consistent error responses with appropriate status codes. Centralized exception handling keeps controllers clean.",
                example: `@RestControllerAdvice
class GlobalExceptionHandler {
    @ExceptionHandler(
        ResourceNotFoundException.class
    )
    ResponseEntity<String> handleNotFound(
        ResourceNotFoundException ex
    ) {
        return ResponseEntity
            .status(404)
            .body(ex.getMessage());
    }
}`,
            },
        ],
    },

    microservices: {
        title: "Microservices",
        subtitle: "Distributed Backend Architecture",
        topics: [
            {
                title: "Architecture Fundamentals",
                description:
                    "Understand independently deployable services, service boundaries, data ownership, scalability, and the trade-offs of distributed systems.",
                example: `Client
  -> API Gateway
      -> User Service
      -> Order Service
      -> Payment Service`,
            },
            {
                title: "Service Responsibilities",
                description:
                    "Design services around clear business capabilities. Keep responsibilities focused and define stable contracts between services.",
                example: `User Service    -> User profiles
Order Service   -> Order lifecycle
Payment Service -> Payment processing`,
            },
            {
                title: "REST-based Communication",
                description:
                    "Connect services through HTTP APIs. Consider timeouts, retries, error handling, idempotency, and service discovery.",
                example: `// Example using Spring's RestClient
String response = restClient.get()
    .uri("http://user-service/api/users/{id}", id)
    .retrieve()
    .body(String.class);`,
            },
            {
                title: "Apache Kafka Fundamentals",
                description:
                    "Use event-driven messaging to decouple services. Understand topics, partitions, producers, consumers, consumer groups, and delivery behavior.",
                example: `// Event flow
Order Service
    -> OrderCreated event
        -> Kafka topic
            -> Notification Service`,
            },
        ],
    },

    mysql: {
        title: "MySQL",
        subtitle: "Relational Database Management",
        topics: [
            {
                title: "CRUD Operations",
                description:
                    "Create, read, update, and delete records using SQL. Use parameterized queries through your data-access framework.",
                example: `SELECT * FROM employees;

INSERT INTO employees (name, salary)
VALUES ('Abhishek', 50000);

UPDATE employees
SET salary = 55000
WHERE id = 1;

DELETE FROM employees WHERE id = 1;`,
            },
            {
                title: "Joins & Subqueries",
                description:
                    "Combine related tables using INNER JOIN and LEFT JOIN. Use subqueries when a query depends on the result of another query.",
                example: `SELECT e.name, d.department_name
FROM employees e
JOIN departments d
  ON e.department_id = d.id;`,
            },
            {
                title: "Primary & Foreign Keys",
                description:
                    "Use primary keys to uniquely identify rows and foreign keys to enforce relationships between tables.",
                example: `CREATE TABLE orders (
    id BIGINT PRIMARY KEY,
    customer_id BIGINT,
    FOREIGN KEY (customer_id)
        REFERENCES customers(id)
);`,
            },
            {
                title: "Indexes & Constraints",
                description:
                    "Indexes can speed up lookups but add storage and write overhead. Constraints enforce rules such as uniqueness and non-null values.",
                example: `CREATE INDEX idx_employee_email
ON employees(email);

ALTER TABLE employees
ADD CONSTRAINT uq_employee_email
UNIQUE (email);`,
            },
            {
                title: "Normalization",
                description:
                    "Organize relational data to reduce duplication and update anomalies. Understand first, second, and third normal forms.",
                example: `-- Keep department information
-- in a separate departments table.
-- Reference it using department_id.`,
            },
            {
                title: "Aggregate Functions",
                description:
                    "Summarize data with COUNT, SUM, AVG, MIN, and MAX. Use GROUP BY to aggregate rows and HAVING to filter groups.",
                example: `SELECT department_id,
       COUNT(*) AS employee_count,
       AVG(salary) AS average_salary
FROM employees
GROUP BY department_id
HAVING COUNT(*) > 1;`,
            },
        ],
    },

    "apache-kafka": {
        title: "Apache Kafka",
        subtitle: "Event Streaming & Messaging",
        topics: [
            {
                title: "Topics & Partitions",
                description:
                    "Topics organize events, while partitions distribute data and enable parallel processing. Ordering is guaranteed within a partition.",
                example: `Topic: orders
  Partition 0 -> events
  Partition 1 -> events
  Partition 2 -> events`,
            },
            {
                title: "Producers & Consumers",
                description:
                    "Producers publish records to Kafka topics. Consumers read records and process them according to their application logic.",
                example: `Producer
   -> orders topic
       -> Consumer
           -> Process order event`,
            },
            {
                title: "Consumer Groups",
                description:
                    "Consumers in a group share partition work. A partition is assigned to at most one consumer in a group at a time.",
                example: `Consumer Group A
  Consumer 1 -> Partition 0
  Consumer 2 -> Partition 1`,
            },
            {
                title: "Event-driven Communication",
                description:
                    "Publish domain events so services can react asynchronously. Design consumers to handle retries and duplicate processing safely.",
                example: `OrderCreated
    -> Inventory Service
    -> Notification Service
    -> Analytics Service`,
            },
        ],
    },

    "git-maven": {
        title: "Git & Maven",
        subtitle: "Version Control & Build Automation",
        topics: [
            {
                title: "Git Add, Commit & Push",
                description:
                    "Track changes locally, create commits with meaningful messages, and push commits to a remote repository.",
                example: `git status
git add .
git commit -m "Update API"
git push origin main`,
            },
            {
                title: "Branches & Merging",
                description:
                    "Use branches to isolate work, merge changes after review, and resolve conflicts when multiple changes affect the same code.",
                example: `git switch -c feature/user-api
git add .
git commit -m "Add user API"
git switch main
git merge feature/user-api`,
            },
            {
                title: "GitHub Workflow",
                description:
                    "Collaborate through remote repositories, feature branches, pull requests, code reviews, and protected main branches.",
                example: `git clone <repository-url>
git switch -c feature/login
git push -u origin feature/login
# Open a pull request on GitHub`,
            },
            {
                title: "Maven Dependencies",
                description:
                    "Declare project libraries in pom.xml. Maven resolves transitive dependencies and supports reproducible project builds.",
                example: `<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>`,
            },
            {
                title: "Maven Build Lifecycle",
                description:
                    "Use Maven lifecycle phases to compile, test, package, verify, and install Java applications.",
                example: `mvn clean
mvn test
mvn package
mvn install`,
            },
        ],
    },

    aws: {
        title: "AWS & Cloud Services",
        subtitle: "Cloud Infrastructure & Deployment",
        topics: [
            {
                title: "Amazon EC2",
                description:
                    "Run virtual servers in the cloud. Understand instances, security groups, SSH access, and application deployment basics.",
                example: `Use EC2 to host a Java
Spring Boot application.`,
            },
            {
                title: "Amazon S3",
                description:
                    "Store files and objects in buckets. Learn bucket policies, access control, and safe handling of uploaded files.",
                example: `Store documents, images,
and application exports in S3.`,
            },
            {
                title: "AWS IAM",
                description:
                    "Manage identities, roles, and permissions. Follow least-privilege access and avoid embedding credentials in application code.",
                example: `Application
  -> IAM Role
      -> Permitted AWS service`,
            },
            {
                title: "Amazon RDS",
                description:
                    "Use managed relational databases and understand backups, connectivity, credentials, and database security.",
                example: `Spring Boot
  -> Database configuration
      -> Amazon RDS`,
            },
            {
                title: "Amazon CloudWatch",
                description:
                    "Collect metrics and logs, build dashboards, and configure alarms to help observe application health and failures.",
                example: `Application logs
  -> CloudWatch Logs
  -> Metrics and alarms`,
            },
            {
                title: "ECS & ECR",
                description:
                    "ECR stores container images. ECS runs and manages containers, including deployments and service scaling.",
                example: `Docker image
  -> Amazon ECR
      -> Amazon ECS`,
            },
            {
                title: "AWS Lambda",
                description:
                    "Run code in response to events without managing servers directly. Understand triggers, execution permissions, and limits.",
                example: `S3 upload event
  -> Lambda function
      -> Process uploaded file`,
            },
        ],
    },
};

export default function SkillDetails() {
    const { skillSlug } = useParams();
    const skill = skillDetails[skillSlug];

    if (!skill) {
        return (
            <main className="skill-detail-page">
                <Link to="/" className="skill-back-link">
                    <ArrowLeft size={16} />
                    Back to portfolio
                </Link>
                <h1>Skill not found</h1>
                <p>The requested skill page does not exist.</p>
            </main>
        );
    }

    return (
        <main className="skill-detail-page">
            <Link to="/" className="skill-back-link">
                <ArrowLeft size={16} />
                Back to portfolio
            </Link>

            <header className="skill-detail-header">
                <p className="skill-detail-eyebrow">TECHNICAL SKILLS / DETAILS</p>
                <h1>{skill.title}</h1>
                <p className="skill-detail-subtitle">{skill.subtitle}</p>
            </header>

            <section className="skill-detail-grid">
                {skill.topics.map((topic, index) => (
                    <article className="skill-detail-card" key={topic.title}>
            <span className="skill-topic-number">
              {String(index + 1).padStart(2, "0")}
            </span>

                        <h2>{topic.title}</h2>
                        <p>{topic.description}</p>

                        {topic.example && (
                            <pre className="skill-code-example">
                <code>{topic.example}</code>
              </pre>
                        )}
                    </article>
                ))}
            </section>
        </main>
    );
}
