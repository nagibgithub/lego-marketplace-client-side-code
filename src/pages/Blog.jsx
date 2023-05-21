import pageTitle from "../hooks/pageTitle";

const Blog = () => {

    pageTitle('Lego Store | Blog');

    return (
        <div className='container m-auto border-2 p-2 rounded-lg' >
            <div className='grid grid-cols-3'>
                <div className='col-span-1'></div>
                <h1 className='text-center col-span-1 font-bold text-3xl my-3'>Bonus Question Section</h1>
            </div>
            <div className='border-2 p-5 rounded-lg shadow-lg bg-sky-50 mb-5'>
                <div className='flex items-center'>
                    <h1 className='bg-red-400 py-2 px-4 w-max border-2 text-lg font-semibold rounded-lg shadow-lg'>Quesion: 1</h1>
                    <h2 className='pl-4 text-lg font-semibold'>What is an access token and refresh token? how do they work and where should we store then on Client-Side?</h2>
                </div>
                <h1 className='bg-green-400 py-2 px-4 w-max border-2 text-lg font-semibold rounded-lg shadow-lg'>Answer: </h1>
                <p className='pl-4 text-lg font-semibold'>
                    <br />                    An access token and a refresh token are both used in authentication and authorization protocols, typically in the context of web applications or APIs.
                    <br />
                    <br />                    1. Access Token:
                    <br />                    An access token is a credential that is used to access protected resources, such as APIs or services. It is usually issued by an authorization server after a user successfully authenticates and authorizes an application. The access token contains information about the user and their permissions, and it has a limited lifespan.
                    <br />
                    <br />                    When a client (such as a web or mobile application) makes a request to access a protected resource, it includes the access token in the request. The server verifies the token's authenticity, checks its validity and permissions, and grants or denies access accordingly.
                    <br />
                    <br />                    Access tokens are typically short-lived to enhance security. They can have an expiration time or a specific lifetime defined by the server. Once the access token expires, the client needs to obtain a new one to continue accessing protected resources.
                    <br />
                    <br />                    2. Refresh Token:
                    <br />                    A refresh token is a long-lived credential that is used to obtain a new access token without requiring the user to re-authenticate. It is issued alongside the access token during the initial authentication process. The refresh token is securely stored by the client-side application and is used to request a new access token when the current one expires.
                    <br />
                    <br />                    When the access token expires, the client sends a request to the authorization server, including the refresh token. If the refresh token is valid and has not expired, the server issues a new access token, allowing the client to continue accessing protected resources without disrupting the user's experience. The refresh token itself is not sent to the resource server; it is only used between the client and the authorization server.
                    <br />
                    <br />                    Storage of Tokens on the Client-Side:
                    <br />                    Access tokens and refresh tokens must be securely stored on the client-side to prevent unauthorized access and potential security breaches. Here are some common practices for token storage:
                    <br />
                    <br />                    1. Access Token:
                    <br />                    The access token is usually stored in memory or a secure storage mechanism provided by the client platform (e.g., a session variable, local storage, or a secure cookie). It should not be exposed to potential cross-site scripting (XSS) attacks or accessible by malicious scripts.
                    <br />
                    <br />                    2. Refresh Token:
                    <br />                    The refresh token requires stronger security because of its long-lived nature. It should be stored in a more secure manner, such as an encrypted form, within a secure storage mechanism (e.g., an HttpOnly secure cookie or a secure server-side session store).
                </p>
            </div>
            <div className='border-2 p-5 rounded-lg shadow-lg bg-sky-50 mb-5'>
                <div className='flex items-center'>
                    <h1 className='bg-red-400 py-2 px-4 w-max border-2 text-lg font-semibold rounded-lg shadow-lg'>Quesion: 2</h1>
                    <h2 className='pl-4 text-lg font-semibold'>Compare SQL and NoSQL databases</h2>
                </div>
                <h1 className='bg-green-400 py-2 px-4 w-max border-2 text-lg font-semibold rounded-lg shadow-lg'>Answer: </h1>
                <p className='pl-4 text-lg font-semibold'>
                    <br />                    SQL and NoSQL are two distinct types of database management systems (DBMS) that differ in their data models, querying languages, scalability, and use cases. Here's a comparison between the two:
                    <br />
                    <br />                    1. Data Model:
                    <br />                    SQL (Structured Query Language) databases use a rigid schema with predefined tables and columns to structure data in a tabular format. They enforce data integrity through relationships and constraints.
                    <br />                    NoSQL (Not Only SQL) databases have a flexible, schema-less data model. They store data in various formats, such as key-value pairs, documents, wide-column stores, or graph structures. This flexibility allows for dynamic and unstructured data storage.
                    <br />
                    <br />                    2. Querying Language:
                    <br />                    SQL databases use the SQL language for querying and manipulating data. SQL provides a standardized syntax for defining, modifying, and retrieving data from relational databases.
                    <br />                    NoSQL databases have diverse query languages specific to each database type. For example, MongoDB uses a query language based on JSON-like documents, while Cassandra uses CQL (Cassandra Query Language) with a SQL-like syntax.
                    <br />
                    <br />                    3. Scalability:
                    <br />                    SQL databases typically scale vertically, meaning they require more powerful hardware to handle increased workloads. They are designed to run on a single server, although some offer options for limited horizontal scaling.
                    <br />                    NoSQL databases are designed to scale horizontally, allowing them to handle large amounts of data and high traffic loads across multiple servers or clusters. They are inherently built for distributed systems and can easily scale to meet growing demands.
                    <br />
                    <br />                    4. Data Consistency:
                    <br />                    SQL databases emphasize ACID (Atomicity, Consistency, Isolation, Durability) properties, ensuring strict data consistency and integrity. Transactions follow a "all-or-nothing" principle, where either the entire transaction is committed or rolled back.
                    <br />                    NoSQL databases often prioritize availability and partition tolerance (CAP theorem) over strict consistency. They provide eventual consistency, where data updates are propagated to all nodes over time, resulting in eventual synchronization.
                    <br />
                    <br />                    5. Use Cases:
                    <br />                    SQL databases excel in scenarios that require complex relationships, structured data, and strong data integrity, such as financial systems, e-commerce platforms, and content management systems.
                    <br />                    NoSQL databases are suitable for handling unstructured, semi-structured, or rapidly changing data, making them well-suited for applications like real-time analytics, content caching, social networks, and IoT data management.
                </p>
            </div>
            <div className='border-2 p-5 rounded-lg shadow-lg bg-sky-50 mb-5'>
                <div className='flex items-center'>
                    <h1 className='bg-red-400 py-2 px-4 w-max border-2 text-lg font-semibold rounded-lg shadow-lg'>Quesion: 3</h1>
                    <h2 className='pl-4 text-lg font-semibold'>What is express js? And What is Next JS?</h2>
                </div>
                <h1 className='bg-green-400 py-2 px-4 w-max border-2 text-lg font-semibold rounded-lg shadow-lg'>Answer: </h1>
                <p className='pl-4 text-lg font-semibold'>
                    <br /> Express.js is a popular web application framework for Node.js, a runtime environment that allows JavaScript to run on the server-side. Express.js provides a robust set of features and tools to build web applications and APIs. It is known for its simplicity, flexibility, and minimalistic approach, allowing developers to create web servers and handle HTTP requests and responses efficiently.
                    <br />
                    <br /> Express.js follows the middleware pattern, which means it allows you to define middleware functions that can process incoming requests before they reach the final route handler. This makes it easy to add functionality such as authentication, request validation, logging, and more to your applications. Express.js also supports the creation of routers, enabling you to organize your application's endpoints into modular components.
                    <br />
                    <br /> Next.js, on the other hand, is a framework for building server-rendered React applications. It is built on top of React and provides additional features to simplify the development of React-based web applications. Next.js aims to enhance the performance and SEO-friendliness of React applications by implementing server-side rendering (SSR) and static site generation (SSG).
                    <br />
                    <br /> With Next.js, you can create dynamic web pages that are rendered on the server and delivered to the client as HTML. This approach improves the initial load time and allows search engines to index your pages effectively. Next.js also supports client-side rendering (CSR), allowing you to build hybrid applications that combine server-side and client-side rendering based on your needs.
                </p>
            </div>
            <div className='border-2 p-5 rounded-lg shadow-lg bg-sky-50 mb-5'>
                <div className='flex items-center'>
                    <h1 className='bg-red-400 py-2 px-4 w-max border-2 text-lg font-semibold rounded-lg shadow-lg'>Quesion: 4</h1>
                    <h2 className='pl-4 text-lg font-semibold'>What is mongoDB aggregate and how does it work?</h2>
                </div>
                <h1 className='bg-green-400 py-2 px-4 w-max border-2 text-lg font-semibold rounded-lg shadow-lg'>Answer: </h1>
                <p className='pl-4 text-lg font-semibold'>
                    <br />                    MongoDB's Aggregation Framework is a powerful feature that allows you to perform advanced data processing operations on MongoDB collections. It provides a flexible and efficient way to retrieve, manipulate, and analyze data.
                    <br />
                    <br />                    Here's a high-level overview of how the Aggregation Framework works:
                    <br />                    1. Data Source: The aggregation pipeline starts with a data source, which is typically a MongoDB collection. This is the input data that will be processed by the aggregation pipeline.
                    <br />                    2. Stages: The Aggregation Framework consists of multiple stages, and you can chain them together to perform complex operations. Each stage takes the input documents, performs an operation, and produces output documents. Some common stages include $match, $group, $project, $sort, $limit, $skip, $unwind, etc.
                    <br />                    $match: Filters the documents based on specific conditions, similar to the find query.
                    <br />                    $group: Groups the documents based on a specified key and performs aggregation operations like sum, average, count, etc.
                    <br />                    $project: Specifies the fields to include or exclude in the output documents, and allows you to create new calculated fields.
                    <br />                    $sort: Sorts the documents based on specified fields.
                    <br />                    $limit: Limits the number of documents in the output.
                    <br />                    $skip: Skips a specified number of documents from the input.
                    <br />                    $unwind: Deconstructs an array field, creating separate documents for each element.
                    <br />                    3. Pipeline: You construct an aggregation pipeline by combining multiple stages. The output of one stage becomes the input of the next stage in the pipeline, allowing you to perform a series of transformations on the data.
                    <br />                    4. Result: The aggregation pipeline produces a final result after all the stages have been executed. The result can be a single document, a cursor to iterate over multiple documents, or an output collection where the results are stored.
                </p>
            </div>
        </div >
    );
};

export default Blog;