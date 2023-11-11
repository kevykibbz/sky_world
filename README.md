### Sky World Limited - Software Engineering Pre-Interview Task S

The task will involve creating a simple Survey application. The application will allow users to respond to survey questions and view a list of all responses to the survey
questions.

### The task will be split into 3 components:

1. Databases 1
   Using a Relational Database Management System, either MySQL M , Oracle O , Microsoft SQL Server M or Postgres P :
1. Design an Entity Relationship Diagram (ERD) E for the database for the application.
1. Implement the database, name it sky_survey_db s .
1. REST API 2
   Using your preferred language, create a REST API R that connects to your database.
   The API should have the following endpoints:
1. To fetch list of questions
   url: /api/questions
   method: GET G
   response:

```
<questions>
<question name="full_name" type="short_text" required="yes">
<text>What is your full name?</text>
<description>[Surname] [First Name] [Other Names]</description>
</question>
<question name="email_address" type="email" required="yes">
<text>What is your email address?</text>
<description/>
</question>
<question name="description" type="long_text" required="yes">
<text>Tell us a bit more about yourself</text>
<description/>
</question>
<question name="gender" type="choice" required="yes">
<text>What is your gender?</text>
<description/>
<options multiple="no">
<option value="MALE">Male</option>
<option value="FEMALE">Female</option>
<option value="OTHER">Other</option>
</options>
</question>
<question name="programming_stack" type="choice" required="yes">
<text>What programming stack are you familiar with?</text>
<description>You can select multiple</description>
<options multiple="yes">
<option value="REACT">React JS</option>
<option value="ANGULAR">Angular JS</option>
<option value="VUE">Vue JS</option>
<option value="SQL">SQL</option>
<option value="POSTGRES">Postgres</option>
<option value="MYSQL">MySQL</option>
<option value="MSSQL">Microsoft SQL Server</option>
<option value="Java">Java</option>
<option value="PHP">PHP</option>
<option value="GO">Go</option>
<option value="RUST">Rust</option>
</options>
</question>
<question name="certificates" type="file" required="yes">
<text>Upload any of your certificates?</text>
<description>You can upload multiple (.pdf)</description>
<file_properties format=".pdf" max_file_size="1" max_file_size_unit="mb" multiple="yes"/>
</question>
</questions>

```

2. To submit responses to the questions
url: /api/questions/responses
method: PUT P
response:

```
<question_response>
<full_name>Jane Doe</full_name>
<email_address>janedoe@gmail.com</email_address>
<description>I am an experienced FrontEnd Engineer with over 6 years experience.</description>
<gender>MALE</gender>
<programming_stack>REACT,VUE</programming_stack>
<certificates>
<certificate>Adobe Certification 19-08-2023.pdf</certificate>
<certificate>Figma Fundamentals 19-08-2023.pdf</certificate>
</certificates>
<date_responded>2023-09-23 12:30:12</date_responded>
</question_response>

```

The API should support uploading of files through use of form-data f .
3. To fetch submitted responses to the questions
url: /api/questions/responses
method: GET G

response:

```
<question_responses current_page="1" last_page="1" page_size="10" total_count="2">
<question_response>
<response_id>1</response_id>
<full_name>John Doe</full_name>
<email_address>johndoe@gmail.com</email_address>
<description>I am an experienced FullStack Engineer with over 2 years experience.</description>
<gender>MALE</gender>
<programming_stack>REACT,JAVA,SQL,POSTGRES</programming_stack>
<certificates>
<certificate id="1">Oracle Java Certification 19-08-2023.pdf</certificate>
<certificate id="2">Oracle SQL Certification 19-08-2023.pdf</certificate>
</certificates>
<date_responded>2023-09-21 12:30:12</date_responded>
</question_response>
<question_response>
<response_id>2</response_id>
<full_name>Jane Doe</full_name>
<email_address>janedoe@gmail.com</email_address>
<description>I am an experienced FrontEnd Engineer with over 6 years experience.</description>
<gender>MALE</gender>
<programming_stack>REACT,VUE</programming_stack>
<certificates>
<certificate id="3">Adobe Certification 19-08-2023.pdf</certificate>
<certificate id="4">Figma Fundamentals 19-08-2023.pdf</certificate>
</certificates>
<date_responded>2023-09-23 12:30:12</date_responded>
</question_response>
</question_responses>

```
The API should support:
pagination of the records.
filtering of the responses based on email_address e

4. To download a certificate by providing the idi of the certificate as a URL Parameter
url: /api/questions/responses/certificates/{id}
method: GET G
Provide a Postman Collection P documenting the endpoints above with their saved responses

3. User Interface (Mobile or Web) 3
Create a User Interface for the application.
For mobile developers m , use your preferred mobile development languages or framework i.e. Android A , Flutter F or React Native R .
For web & backend developers w , use your preferred web development languages or framework.
The User Interface should have two pages:
1. Survey Form S
2. Survey Responses S
1. Survey Form 1
The page will have the form through which users can respond to the questions.
