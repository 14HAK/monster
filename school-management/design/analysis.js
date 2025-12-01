// ----------------------------------phase-1--------------------------
// School Management steps:/
// ---------
// 1. Basic school management system "moon light" basic websites.

// * Home page.
// * About page.
// * Contact page.

// ---------
// 2. Student apply for admission.
// -Admission data: 
// -Parent NID Information,
// -Parent address,
// -Parent contact,
// -Student NID or Birth Certificate information,
// -Student get a invoice like for provement.(student information, token 
// provment, admit card, selectionExam date)

// * Admission page.
// * Invoice page.

// ---------
// 3. Teachers apply for jobs.
//  -job apply data:
// - NID information
// - Contact Information 
// - Resume
// - Papers(pdf)
// - Teacher get an invoice like for provement.(interview date, token provement).

// * Apply page
// * Invoice page

// ---------
// 4. Principle received Teacher's apply data.
// - wait for teachers selection interview result
// - after interview create Teacher's profile.
// - send email for selection.

// * Teacher's profile page.

// ---------
// 5. Principle received Teacher's apply data.
// - wait for teachers selection interview result
// - after interview create Teacher's profile.
// - send email for selection.

// * Teacher's profile page.



// ------------------------------------------------------------
// School Management Databases:/

//-------------------------------------------------------------
// (Teacher_application):
const teacher_application = {
    email: String,
    nid_information: {
        name: String,
        date_of_birth: Date,
        nid_number: String,
    },
    contact: {
        phone: String,
        address: {
            nationality: String,
            parmanent: String,
            present: String,
            city: String,
            postal_code: String,
        }
    },
    resume: FileSystem,
    papers: FileSystem,
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
    },
    applied_at: { type: Date, default: Date.now },
}

// (Student_application):
const student_application = {
    email: String,
    nid_information: {
        name: String,
        date_of_birth: Date,
        nid_number: String,
        father_nid: {
            name: String,
            date_of_birth: Date,
            nid_number: String,
        },
        mother_nid: {
            name: String,
            date_of_birth: Date,
            nid_number: String,
        },
    },
    contact: {
        phone: String,
        address: {
            nationality: String,
            parmanent: String,
            present: String,
            city: String,
            postal_code: String,
        }
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
    },
    applied_at: { type: Date, default: Date.now },
}
//-------------------------------------------------------------
// User 1 --- 1 Teacher
// User 1 --- 1 Student
// Student 1 --- n Parent

// User:
const User = {
    email: String,
    password: String, // hashed
    role: {
        type: String,
        enum: ["teacher", "student", "parent", "admin"],
        required: true
    },
    ref: Student, // User(1) - Student(1)
    ref: Teacher, // User(1) - Teacher(1)
}

const Student = {
    profile: {
        name: String,
        date_of_birth: Date,
        nationality: String,
        phone: String,
        address: {
            permanent: String,
            present: String,
            city: String,
            postal_code: String
        }
    },
    created_at: { type: Date, default: Date.now },
    ref: User, // Student(1) - User(1)
    ref: Parent, // Student(n) - Parent(1)
}

const Parent = {
    father_info: {
        name: String,
        nid: String,
        phone: String
    },
    mother_info: {
        name: String,
        nid: String,
        phone: String
    },
    ref: [Student] // Parent(1) - Student(n)
}

const Teacher = {
    profile: {
        name: String,
        date_of_birth: Date,
        nationality: String,
        phone: String,

        address: {
            permanent: String,
            present: String,
            city: String,
            postal_code: String
        }
    },

    created_at: { type: Date, default: Date.now },
    ref: User, // Teacher(1) - User(1)
}
