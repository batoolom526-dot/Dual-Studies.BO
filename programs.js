// Programs data
const programsData = [
    {
        id: 1,
        name: "Bosch AI & Engineering Training",
        nameAr: "برنامج Bosch للذكاء الاصطناعي والهندسة",
        nameDe: "Bosch KI- und Ingenieurausbildung",
        company: "Bosch",
        location: "Germany",
        majors: ["Electrical Engineering", "Computer Science", "Information Technology", "Mechanical Engineering"],
        majorsAr: ["الهندسة الكهربائية", "علوم الحاسوب", "تكنولوجيا المعلومات", "الهندسة الميكانيكية"],
        majorsDe: ["Elektrotechnik", "Informatik", "Informationstechnologie", "Maschinenbau"],
        description: "A comprehensive training program focusing on AI applications, software development, and industrial automation. Participants will work on real projects and gain hands-on experience with cutting-edge technologies.",
        descriptionAr: "برنامج تدريبي شامل يركز على تطبيقات الذكاء الاصطناعي وتطوير البرمجيات والأتمتة الصناعية. سيعمل المشاركون على مشاريع حقيقية ويكتسبون خبرة عملية مع التقنيات المتقدمة.",
        descriptionDe: "Ein umfassendes Schulungsprogramm mit Schwerpunkt auf KI-Anwendungen, Softwareentwicklung und Industrieautomation. Die Teilnehmer arbeiten an echten Projekten und sammeln praktische Erfahrungen mit modernsten Technologien.",
        duration: "3 months",
        durationAr: "3 أشهر",
        durationDe: "3 Monate",
        startDate: "2026-04-15",
        deadline: "2026-03-15",
        requirements: [
            "Bachelor's degree in related field or currently in final year",
            "Minimum GPA: 3.0/4.0 (or equivalent)",
            "English language proficiency (B2 or higher, TOEFL 90+ or IELTS 6.5+)",
            "German language proficiency (A2 minimum, preferred B1 or higher)",
            "Minimum 70% marks in core subjects related to the program",
            "Strong problem-solving and analytical skills",
            "Previous experience with programming or software development",
            "Excellent communication and teamwork abilities",
            "Commitment to full-time participation for the entire duration",
            "Valid passport with ability to travel to Germany"
        ],
        requirementsAr: [
            "درجة البكالوريوس في مجال ذي صلة أو طالب في السنة الأخيرة",
            "الحد الأدنى للمعدل التراكمي: 3.0/4.0 (أو ما يعادله)",
            "إجادة اللغة الإنجليزية (B2 أو أعلى، TOEFL 90+ أو IELTS 6.5+)",
            "إجادة اللغة الألمانية (A2 كحد أدنى، يفضل B1 أو أعلى)",
            "الحد الأدنى 70% في المواد الأساسية المتعلقة بالبرنامج",
            "مهارات قوية في حل المشاكل والتحليل",
            "خبرة سابقة في البرمجة أو تطوير البرمجيات",
            "قدرات ممتازة في التواصل والعمل الجماعي",
            "الالتزام بالمشاركة بدوام كامل طوال فترة البرنامج",
            "جواز سفر ساري المفعول والقدرة على السفر إلى ألمانيا"
        ],
        requirementsDe: [
            "Bachelorabschluss in verwandtem Bereich oder letztes Studienjahr",
            "Mindest-GPA: 3,0/4,0 (oder Äquivalent)",
            "Englischkenntnisse (B2 oder höher, TOEFL 90+ oder IELTS 6,5+)",
            "Deutschkenntnisse (A2 Minimum, bevorzugt B1 oder höher)",
            "Mindestens 70% Punkte in den programmbezogenen Kernfächern",
            "Starke Problemlösungs- und Analysefähigkeiten",
            "Vorherige Erfahrung in Programmierung oder Softwareentwicklung",
            "Ausgezeichnete Kommunikations- und Teamfähigkeiten",
            "Verpflichtung zur Vollzeitteilnahme für die gesamte Dauer",
            "Gültiger Reisepass mit Fähigkeit, nach Deutschland zu reisen"
        ],
        status: "Active",
        statusAr: "نشط",
        statusDe: "Aktiv",
        applicationUrl: "#"
    }
];

// Language translations for programs page
const programsTranslations = {
    en: {
        programsTitle: "Available Programs",
        programsDesc: "Explore all currently available training and study programs offered through our partnerships.",
        noProgramsTitle: "No Programs Available",
        noProgramsText: "There are currently no active programs available. Please check back later or contact the Internationalization Office for more information.",
        footerText: "&copy; 2024 Al-Quds University - Dual Studies College. All rights reserved.",
        homeLink: "Home",
        contactLink: "Contact",
        backBtn: "Back to Home",
        company: "Company",
        location: "Location",
        majors: "Eligible Majors",
        description: "Description",
        duration: "Duration",
        startDate: "Start Date",
        deadline: "Application Deadline",
        requirements: "Requirements",
        applyBtn: "Apply Now",
        daysLeft: "days left to apply",
        applicationFormTitle: "Application Form",
        fullName: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        currentUniversity: "Current University",
        major: "Major/Field of Study",
        gpa: "Current GPA",
        englishCertificate: "English Language Certificate (TOEFL/IELTS)",
        germanCertificate: "German Language Certificate",
        academicTranscript: "Academic Transcript",
        cvDocument: "Curriculum Vitae (CV)",
        motivationLetter: "Motivation Letter",
        passerportCopy: "Passport Copy",
        documentRequired: "Document Required",
        uploadDocument: "Upload Document",
        dragDrop: "Drag and drop or click to select",
        submitApplication: "Submit Application",
        cancelApplication: "Cancel",
        applicationSuccess: "Application Submitted Successfully!",
        applicationSuccessMsg: "Thank you for applying! The Internationalization Office will review your application and contact you within 2-3 weeks.",
        allFieldsRequired: "All fields are required",
        fileSizeError: "File size should not exceed 5MB",
        fileTypeError: "Only PDF, DOC, DOCX, JPG, PNG formats are allowed"
    },
    ar: {
        programsTitle: "البرامج المتاحة",
        programsDesc: "استكشف جميع برامج التدريب والدراسة المتاحة حالياً من خلال شراكاتنا.",
        noProgramsTitle: "لا توجد برامج متاحة",
        noProgramsText: "لا توجد برامج نشطة متاحة حالياً. يرجى التحقق لاحقاً أو التواصل مع مكتب التدويل للحصول على مزيد من المعلومات.",
        footerText: "&copy; 2024 جامعة القدس - كلية الدراسات المزدوجة. جميع الحقوق محفوظة.",
        homeLink: "الرئيسية",
        contactLink: "اتصل بنا",
        backBtn: "العودة إلى الرئيسية",
        company: "الشركة",
        location: "الموقع",
        majors: "التخصصات المؤهلة",
        description: "الوصف",
        duration: "المدة",
        startDate: "تاريخ البدء",
        deadline: "آخر موعد للتقديم",
        requirements: "المتطلبات",
        applyBtn: "تقدم الآن",
        daysLeft: "أيام متبقية للتقديم",
        applicationFormTitle: "نموذج التقديم",
        fullName: "الاسم الكامل",
        email: "عنوان البريد الإلكتروني",
        phone: "رقم الهاتف",
        currentUniversity: "الجامعة الحالية",
        major: "التخصص/مجال الدراسة",
        gpa: "المعدل التراكمي الحالي",
        englishCertificate: "شهادة اللغة الإنجليزية (TOEFL/IELTS)",
        germanCertificate: "شهادة اللغة الألمانية",
        academicTranscript: "السجل الأكاديمي",
        cvDocument: "السيرة الذاتية",
        motivationLetter: "خطاب الدافع",
        passerportCopy: "نسخة من جواز السفر",
        documentRequired: "مستند مطلوب",
        uploadDocument: "تحميل المستند",
        dragDrop: "اسحب وأفلت أو اضغط للتحديد",
        submitApplication: "إرسال الطلب",
        cancelApplication: "إلغاء",
        applicationSuccess: "تم إرسال الطلب بنجاح!",
        applicationSuccessMsg: "شكراً لتقديمك! سيقوم مكتب التدويل بمراجعة طلبك والتواصل معك في غضون 2-3 أسابيع.",
        allFieldsRequired: "جميع الحقول مطلوبة",
        fileSizeError: "يجب ألا يتجاوز حجم الملف 5 ميجابايت",
        fileTypeError: "فقط تنسيقات PDF و DOC و DOCX و JPG و PNG مسموحة"
    },
    de: {
        programsTitle: "Verfügbare Programme",
        programsDesc: "Erkunden Sie alle derzeit verfügbaren Schulungs- und Studienprogramme durch unsere Partnerschaften.",
        noProgramsTitle: "Keine Programme verfügbar",
        noProgramsText: "Es sind derzeit keine aktiven Programme verfügbar. Bitte überprüfen Sie später oder kontaktieren Sie das Büro für Internationalisierung für weitere Informationen.",
        footerText: "&copy; 2024 Al-Quds Universität - Dual-Study College. Alle Rechte vorbehalten.",
        homeLink: "Startseite",
        contactLink: "Kontakt",
        backBtn: "Zurück zur Startseite",
        company: "Unternehmen",
        location: "Ort",
        majors: "Berechtigte Fachrichtungen",
        description: "Beschreibung",
        duration: "Dauer",
        startDate: "Startdatum",
        deadline: "Bewerbungsfrist",
        requirements: "Anforderungen",
        applyBtn: "Jetzt bewerben",
        daysLeft: "Tage bis zum Bewerbungsschluss",
        applicationFormTitle: "Bewerbungsformular",
        fullName: "Vollständiger Name",
        email: "E-Mail-Adresse",
        phone: "Telefonnummer",
        currentUniversity: "Aktuelle Universität",
        major: "Studienfach/Bereich",
        gpa: "Aktueller GPA",
        englishCertificate: "Englischnachweis (TOEFL/IELTS)",
        germanCertificate: "Deutschnachweis",
        academicTranscript: "Akademisches Transkript",
        cvDocument: "Lebenslauf",
        motivationLetter: "Motivationsschreiben",
        passerportCopy: "Reisepasskopie",
        documentRequired: "Erforderliches Dokument",
        uploadDocument: "Dokument hochladen",
        dragDrop: "Ziehen und ablegen oder klicken zum Auswählen",
        submitApplication: "Bewerbung einreichen",
        cancelApplication: "Abbrechen",
        applicationSuccess: "Bewerbung erfolgreich eingereicht!",
        applicationSuccessMsg: "Danke für Ihre Bewerbung! Das Büro für Internationalisierung wird Ihre Bewerbung prüfen und Sie innerhalb von 2-3 Wochen kontaktieren.",
        allFieldsRequired: "Alle Felder sind erforderlich",
        fileSizeError: "Dateigröße sollte 5MB nicht überschreiten",
        fileTypeError: "Nur PDF-, DOC-, DOCX-, JPG- und PNG-Formate sind zulässig"
    }
};

let currentProgramLanguage = 'en';

document.addEventListener('DOMContentLoaded', function() {
    setupProgramsPageEventListeners();
    renderPrograms();
    setLanguagePage('en');
});

function setupProgramsPageEventListeners() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.dataset.lang;
            setLanguagePage(lang);
        });
    });
}

function setLanguagePage(lang) {
    currentProgramLanguage = lang;
    document.documentElement.lang = lang;
    
    if (lang === 'ar') {
        document.body.dir = 'rtl';
    } else {
        document.body.dir = 'ltr';
    }

    // Update language-specific elements
    Object.keys(programsTranslations[lang]).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = programsTranslations[lang][key];
        }
    });

    // Update header title
    const headerTitle = document.getElementById('headerTitle');
    if (headerTitle) {
        headerTitle.textContent = translations[lang].headerTitle;
    }

    // Update language button states
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });

    // Re-render programs with new language
    renderPrograms();
}

function renderPrograms() {
    const grid = document.getElementById('programsGrid');
    const noMessage = document.getElementById('noProgramsMessage');

    if (programsData.length === 0) {
        grid.style.display = 'none';
        noMessage.style.display = 'block';
        return;
    }

    grid.style.display = 'grid';
    noMessage.style.display = 'none';
    grid.innerHTML = '';

    programsData.forEach(program => {
        const card = document.createElement('div');
        card.className = 'program-card';

        const name = currentProgramLanguage === 'ar' ? program.nameAr : 
                    currentProgramLanguage === 'de' ? program.nameDe : program.name;
        const description = currentProgramLanguage === 'ar' ? program.descriptionAr : 
                           currentProgramLanguage === 'de' ? program.descriptionDe : program.description;
        const duration = currentProgramLanguage === 'ar' ? program.durationAr : 
                        currentProgramLanguage === 'de' ? program.durationDe : program.duration;
        const majors = currentProgramLanguage === 'ar' ? program.majorsAr : 
                      currentProgramLanguage === 'de' ? program.majorsDe : program.majors;
        const requirements = currentProgramLanguage === 'ar' ? program.requirementsAr : 
                            currentProgramLanguage === 'de' ? program.requirementsDe : program.requirements;

        const daysLeft = calculateDaysLeft(program.deadline);
        const isExpired = daysLeft < 0;

        const majorsHtml = majors.map(major => `<span class="major-tag">${major}</span>`).join('');
        const requirementsHtml = requirements.map(req => `<li>${req}</li>`).join('');

        card.innerHTML = `
            <div class="program-header">
                <h2 class="program-name">${name}</h2>
                <div class="program-company">${programsTranslations[currentProgramLanguage].company}: <strong>${program.company}</strong></div>
                <div class="program-status ${program.status.toLowerCase()}">
                    ${program.status}
                </div>
            </div>

            <div class="program-body">
                <div class="program-info">
                    <div class="info-item">
                        <label>${programsTranslations[currentProgramLanguage].location}:</label>
                        <span>${program.location}</span>
                    </div>
                    <div class="info-item">
                        <label>${programsTranslations[currentProgramLanguage].duration}:</label>
                        <span>${duration}</span>
                    </div>
                    <div class="info-item">
                        <label>${programsTranslations[currentProgramLanguage].startDate}:</label>
                        <span>${formatDate(program.startDate)}</span>
                    </div>
                </div>

                <div class="program-section">
                    <h3>${programsTranslations[currentProgramLanguage].description}</h3>
                    <p>${description}</p>
                </div>

                <div class="program-section">
                    <h3>${programsTranslations[currentProgramLanguage].majors}</h3>
                    <div class="majors-container">
                        ${majorsHtml}
                    </div>
                </div>

                <div class="program-section">
                    <h3>${programsTranslations[currentProgramLanguage].requirements}</h3>
                    <ul class="requirements-list">
                        ${requirementsHtml}
                    </ul>
                </div>

                <div class="program-deadline ${isExpired ? 'expired' : 'active'}">
                    <strong>${programsTranslations[currentProgramLanguage].deadline}:</strong> ${formatDate(program.deadline)}
                    ${!isExpired ? `<br><span class="days-left">${daysLeft} ${programsTranslations[currentProgramLanguage].daysLeft}</span>` : '<br><span class="expired-text">Application deadline has passed</span>'}
                </div>
            </div>

            <div class="program-footer">
                <button class="btn btn-primary ${isExpired ? 'disabled' : ''}" 
                        onclick="applyProgram(${program.id})" 
                        ${isExpired ? 'disabled' : ''}>
                    ${programsTranslations[currentProgramLanguage].applyBtn}
                </button>
            </div>
        `;

        grid.appendChild(card);
    });
}

function calculateDaysLeft(deadline) {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const timeDiff = deadlineDate - today;
    const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysLeft;
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString(currentProgramLanguage === 'ar' ? 'ar-SA' : 
                                    currentProgramLanguage === 'de' ? 'de-DE' : 'en-US', options);
}

function applyProgram(programId) {
    const program = programsData.find(p => p.id === programId);
    if (program) {
        document.getElementById('applicationModal').classList.add('active');
        document.getElementById('applicationForm').dataset.programId = programId;
    }
}

// Application modal functionality
document.addEventListener('DOMContentLoaded', function() {
    setupApplicationModalListeners();
});

function setupApplicationModalListeners() {
    const modal = document.getElementById('applicationModal');
    const closeBtn = document.getElementById('closeApplicationModal');
    const cancelBtn = document.getElementById('cancelApplicationBtn');
    const form = document.getElementById('applicationForm');

    // Close modal
    closeBtn.addEventListener('click', closeApplicationModal);
    cancelBtn.addEventListener('click', closeApplicationModal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            closeApplicationModal();
        }
    });

    // Setup file uploads
    setupFileUploads();

    // Form submission
    form.addEventListener('submit', handleApplicationSubmit);
}

function closeApplicationModal() {
    const modal = document.getElementById('applicationModal');
    modal.classList.remove('active');
    document.getElementById('applicationForm').reset();
    clearAllFileNames();
}

function setupFileUploads() {
    const uploadBoxes = document.querySelectorAll('.file-upload-box');
    
    uploadBoxes.forEach(box => {
        const input = box.querySelector('input[type="file"]');
        const fileNameDiv = box.querySelector('.file-name');
        
        // Click to upload
        box.addEventListener('click', () => input.click());
        
        // Drag and drop
        box.addEventListener('dragover', (e) => {
            e.preventDefault();
            box.classList.add('dragover');
        });
        
        box.addEventListener('dragleave', () => {
            box.classList.remove('dragover');
        });
        
        box.addEventListener('drop', (e) => {
            e.preventDefault();
            box.classList.remove('dragover');
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                handleFileSelect(input, files[0], fileNameDiv);
            }
        });
        
        // File input change
        input.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                handleFileSelect(input, e.target.files[0], fileNameDiv);
            }
        });
    });
}

function handleFileSelect(input, file, fileNameDiv) {
    // Validate file size (5MB)
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
        alert(programsTranslations[currentProgramLanguage].fileSizeError);
        input.value = '';
        fileNameDiv.textContent = '';
        return;
    }
    
    // Validate file type
    const allowedTypes = ['application/pdf', 'application/msword', 
                         'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                         'image/jpeg', 'image/png', 'image/jpg'];
    if (!allowedTypes.includes(file.type)) {
        alert(programsTranslations[currentProgramLanguage].fileTypeError);
        input.value = '';
        fileNameDiv.textContent = '';
        return;
    }
    
    // Show file name
    fileNameDiv.textContent = '✓ ' + file.name;
    fileNameDiv.style.color = '#155724';
}

function clearAllFileNames() {
    document.querySelectorAll('.file-name').forEach(el => {
        el.textContent = '';
    });
}

function handleApplicationSubmit(e) {
    e.preventDefault();
    
    const form = document.getElementById('applicationForm');
    const formData = new FormData(form);
    const programId = form.dataset.programId;
    
    // Validate all required files are uploaded
    const inputs = form.querySelectorAll('input[type="file"][required]');
    let allFilesUploaded = true;
    
    inputs.forEach(input => {
        if (!input.value) {
            allFilesUploaded = false;
        }
    });
    
    if (!allFilesUploaded) {
        alert(programsTranslations[currentProgramLanguage].allFieldsRequired);
        return;
    }
    
    // Show success message
    const program = programsData.find(p => p.id === programId);
    const successMsg = `${programsTranslations[currentProgramLanguage].applicationSuccess}\n\n${programsTranslations[currentProgramLanguage].applicationSuccessMsg}`;
    alert(successMsg);
    
    // Close modal and reset form
    closeApplicationModal();
}
