#Smart Student Email Generator

## Project Title

Smart Student Email Generator

## Project Overview

Smart Student Email Generator is an AI-powered web application designed to assist students with creating professional, clear, and well-structured emails. The application allows a student to enter a short description of what the email should say, select a preferred tone, choose the required length, and generate a complete email draft using artificial intelligence.

The system is designed to support students who may struggle with writing formal emails to lecturers, administrators, bursary offices, student support departments, or other academic stakeholders. The application provides a simple and student-friendly interface that turns a rough idea into a polished email draft that can be reviewed, copied, and used.

## Purpose of the Project

The purpose of this project is to demonstrate how artificial intelligence can be used to improve student productivity and communication. Many students know what they want to say, but they may find it difficult to structure their message in a professional and respectful way.

Smart Student Email Generator helps solve this problem by generating email drafts based on user input. The student remains in control of the final message and can review or edit the generated response before sending it.

## Problem Statement

Students often need to communicate with lecturers, tutors, administrators, and support staff. However, some students struggle to write emails that are clear, polite, professional, and properly structured.

Common challenges include:

- Not knowing how to start a formal email
- Using language that is too informal
- Forgetting to include important details
- Writing emails that are too short or unclear
- Taking too long to draft a simple message
- Feeling uncertain about tone and wording

Smart Student Email Generator addresses these challenges by providing an AI-supported writing tool that helps students generate better email drafts in less time.

## Target Users

The main target users of the application are students who need assistance with email writing.

These users may include:

- University students
- College students
- High school learners preparing for further studies
- Students applying for bursaries
- Students contacting lecturers or tutors
- Students requesting academic support
- Students communicating with administration departments

## Technology Stack

### Client Layer

- React 19
- TanStack Start
- Tailwind CSS v4
- shadcn/ui

### Server Layer

- TanStack Server Function
- Cloudflare Worker Edge Runtime
- Zod validation

### AI Layer

- Lovable AI Gateway
- Google Gemini 3 Flash Preview
## Main Features

## How the App Works

1. The student enters the email purpose.
2. The student selects the tone and length.
3. The app validates the input.
4. The server function builds a system prompt and user prompt.
5. The request is sent to the Lovable AI Gateway.
6. Gemini generates the email.
7. The email is returned and shown in the output card.


The application includes the following main features:

### 1. Email Purpose Input

The student can type a short instruction or description of what the email should communicate.

Example:

```text
Ask my lecturer for a 3-day extension.
