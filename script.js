// Инициализация GSAP и ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Эффект параллакса для фоновых изображений
document.querySelectorAll('.parallax-background').forEach(bg => {
    gsap.to(bg, {
        yPercent: 20, // Смещение фона на 20% вниз
        ease: "none",
        scrollTrigger: {
            trigger: bg.parentElement, // Триггер — родительский элемент
            start: "top bottom", // Начало анимации при достижении нижней границы секции
            end: "bottom top", // Конец анимации при достижении верхней границы секции
            scrub: true // Плавное следование за скроллом
        }
    });
});


//Заголовок

gsap.from(".link", {opacity:0,  duration: 1, delay:1, stagger:.4})



// Плавный скролл к секциям
document.querySelectorAll('.nav-list a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Отменяем стандартное поведение ссылки
        const targetId = this.getAttribute('href'); // Получаем ID целевой секции
        const targetSection = document.querySelector(targetId); // Находим секцию

        if (targetSection) {
            // Плавный скролл к секции
            targetSection.scrollIntoView({
                behavior: 'smooth', // Плавный скролл
                block: 'start'      // Выравнивание по верхнему краю
            });

            // Закрываем меню-бургер на мобильных устройствах
            const navList = document.getElementById('nav-list');
            const mobileMenu = document.getElementById('mobile-menu');
            navList.classList.remove('active');
            mobileMenu.classList.remove('active');

            // Убираем выделение со всех ссылок
            document.querySelectorAll('.nav-list a').forEach(link => {
                link.classList.remove('active');
            });

            // Выделяем активную ссылку
            this.classList.add('active');
        }
    });
});

// Выделение активной ссылки при скролле
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-list a');

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // Учитываем высоту шапки
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Обработчик для меню-бургера
document.getElementById('mobile-menu').addEventListener('click', () => {
    const navList = document.getElementById('nav-list');
    const mobileMenu = document.getElementById('mobile-menu');

    navList.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Обработчик для кнопки перевода
document.getElementById('language-toggle').addEventListener('click', () => {
    const currentLang = document.documentElement.lang === 'ru' ? 'en' : 'ru';
    document.documentElement.lang = currentLang;
    document.getElementById('language-toggle').textContent = currentLang === 'ru' ? 'EN' : 'RU';
    translatePage(currentLang);
});

// Данные для перевода
const translations = {
    ru: {
        "Эльдар Исаев": "Eldar Isaev",
        "Обо мне": "About Me",
        "Проекты": "Projects",
        "Публикации": "Publications",
        "Контакты": "Contact",
        "Добро пожаловать в мое портфолио": "Welcome to My Portfolio",
        "Я заместитель начальника отдела промышленной безопасности в Научно-исследовательском институте.": "I'm the deputy head of industrial safety at the Research Institute.",
        "Опыт работы и образование": "Experience and Education",
        "Образование": "Education",
        "Самарский государственный технический университет": "Samara State Technical University",
        "Трубопроводный транспорт. Проектирование, сооружение и эксплуатация газонефтепроводов и газонефтехранилищ.": "Pipeline transportation. Design, construction and operation of gas and oil pipelines and gas and oil storage facilities.",
        "Российский государственный университет нефти и газа имени И. М. Губкина":"I.M. Gubkin Russian State University of Oil and Gas",
        "Трубопроводный транспорт нефти, нефтепродуктов и газа.":"Pipeline transportation of oil, oil products and gas.",
        "Российская академия народного хозяйства и государственной службы при Президенте РФ (РАНХиГС)":"Russian Presidential Academy of National Economy and Public Administration (RANEPA)",
        "Государственное и муниципальное управление. Управление субъектами РФ":"State and municipal governance. Management of constituent entities of the Russian Federation",
        "Санкт-Петербургский Институт Внешнеэкономических Связей, Экономики и Права":"St. Petersburg Institute of Foreign Economic Relations, Economics and Law",
        "Прикладная информатика, информационные системы в коммерческом менеджменте.":"Applied informatics, information systems in commercial management.",
        "Компания: НИИ 'Транснефть'":"Company: Transneft Research Institute",
        "Заместитель заведующего лабораторией промышленной безопасности и охраны труда":"Deputy Head of the Laboratory of Industrial Safety and Labor Protection",
        "Период: 2019":"Period: 2019",
        "Компания: НИИ 'Транснефть'":"Company: Transneft Research Institute",
        "Старший научный сотрудник":"Senior Scientific Associate",
        "Период: 2017-2019":"Period: 2017-2019",
        "Компания: ООО 'Транснефть – Дальний Восток'":"Company: LLC 'Transneft - Far East'",
        "Ведущий инженер службы промышленной безопасности и производственного контроля":"Leading engineer of industrial safety and production control service",
        "Период: 2012-2017":"Period: 2012-2017",
        "Компания: 'Дальневосточное управление Ростехнадзора'":"Company: 'Far Eastern Department of Rostechnadzor'",
        "Главный государственный инспектор отдела контрольно-аналитического разрешительной деятельности и АСУ":"Chief State Inspector of the Control and Analytical Permitting and ACS Department",
        "Период: 2011-2012":"Period: 2011-2012",
        "Научные работы":"Scientific works",
        "Оценка эффективности затрат на выполнение мероприятий по промышленной безопасности на опасных производственных объектах магистрального трубопроводного транспорта нефти и нефтепродуктов":"Cost-effectiveness assessment of industrial safety measures at hazardous production facilities of the main pipeline transportation of oil and oil products",
        "Требования к автоматизированной системе контроля рисков, связанных с произошедшими предпосылками к инцидентам, инцидентами и авариями в ОСТ (АСКР)":"Requirements to the automated system of control of risks associated with the occurred preconditions to incidents, incidents and accidents in OST (ASCR)",
        "Исследование технологий применения детекторов жидких углеводородов в местах пересечения трубопроводов с важными объектами транспортной инфраструктуры":"Investigation of technologies for application of liquid hydrocarbon detectors at pipeline crossings with important objects of transportation infrastructure",
        "Исследование и формирование блоков мероприятий по обеспечению безопасности, включаемых в наряды-допуски при подготовке и проведении огневых, газоопасных работ и работ повышенной опасности на объектах организаций системы 'Транснефть' (АСКР)":"Study and formation of blocks of safety measures to be included in the safety work permits when preparing and carrying out fire, gas hazardous works and high risk works at the facilities of the organizations of the 'Transneft' system (ASCR).",
        "Требования к системе анализа функционирования системы управления промышленной безопасностью, позволяющей передавать информацию о техногенных событиях 4-го уровня, блок 'Документационное обеспечение промышленной безопасности'":"Requirements to the system of analyzing the functioning of the industrial safety management system, allowing to transfer information on technogenic events of the 4th level, block 'Documentary support of industrial safety'.",
        "Исследование факторов и показателей аварийности на объектах магистрального трубопроводного транспорта ведущих мировых компаний, разработка рекомендаций по повышению уровня безопасности эксплуатации объектов организаций системы 'Транснефть'":"Study of factors and indicators of accidents at the facilities of trunk pipeline transport of the world's leading companies, development of recommendations to improve the level of safety of operation of the facilities of the 'Transneft' system organizations.",
        "Исследование факторов и показателей аварийности магистрального транспорта нефти и нефтепродуктов 'Транснефти' и мировых компаний- аналогов":"Study of factors and indicators of accidents in Transneft's trunk oil and petroleum product transportation and global peers",
        "Комплексная система обеспечения целостности резервуара":"Comprehensive tank integrity system",
        "Система обеспечения безопасности персонала объектов ТЭК, в составе которых осуществляется эксплуатация резервуарных парков нефти/нефтепродуктов":"System for ensuring safety of personnel at fuel and energy facilities, which include operation of oil/oil product tank farms",
        "Автоматизация работы штаба ликвидации чрезвычайной ситуации на объектах магистрального трубопроводного транспорта":"Automation of the work of the emergency response headquarters at trunk pipeline transportation facilities",
        "Система обеспечения безаварийного проведения земляных работ на объектах ТЭК":"System for ensuring accident-free excavation works at fuel and energy facilities",
        "Совершенствование системы управления охраной труда организаций путем внедрения интерактивного 3D инструктажа":"Improvement of the organizations' occupational safety management system by introducing interactive 3D briefings",
        "Повышение безопасности производства огневых и газоопасных работ с использованием системы постоянного контроля концентрации паров углеводородов нефти и нефтепродуктов":"Improving the safety of fire and gas hazardous operations using a system of constant control of the concentration of hydrocarbon vapors of oil and oil products",
        "Конкурсы":"Competitions",
        "Блок учета и контроля испарений нефти":"Oil vaporization metering and control unit",
        "Автоматизация работы штаба по ликвидации чрезвычайной ситуации на объектах магистрального трубопровода":"Automation of the work of the headquarters for emergency response at the main pipeline facilities",
        "Автоматизированная система учета отказов ООО 'Транснефть - Дальний Восток' (АИС 'ОТКАЗ')":"Automated Failure Accounting System of LLC 'Transneft - Far East' (AIS 'Failure')",
        "Повышение безопасности производства огневых и газоопасных работ с использованием системы постоянного контроля концентрации паров углеводородов нефти и нефтепродуктов":"Improving the safety of fire and gas hazardous operations using a system of constant control of the concentration of hydrocarbon vapors of oil and oil products",
        "Снижение затрат на 15% при сохранении уровня безопасности. Внедрено в практику ООО 'Транснефть'":"Cost reduction by 15% while maintaining the safety level. Implemented in the practice of LLC 'Transneft'",
        "Повышение точности анализа рисков на 25%. Внедрено в ООО 'Транснефть – Дальний Восток'":"Increased accuracy of risk analysis by 25%. Implemented in LLC 'Transneft - Far East'",
        "Снижение риска аварий на 20%. Внедрено на объектах ООО 'Транснефть'":"Reduction of accident risk by 20%. Implemented at 'Transneft' facilities",
        "Снижение нарушений при проведении работ на 30%. Внедрено в ООО 'Транснефть'":"Reduction of work violations by 30%. Implemented in LLC 'Transneft'",
        "Повышение эффективности управления безопасностью на 20%. Внедрено в ООО 'Транснефть – Дальний Восток'":"Increased efficiency of safety management by 20%. Implemented in LLC 'Transneft - Far East'",
        "Снижение аварийности на 15%. Рекомендации внедрены в практику ООО 'Транснефть'":"Reduction of accident rate by 15%. Recommendations are implemented in practice of LLC 'Transneft'",
        "":"",
        "":"",
        "":"",
        "":"",
        "Опыт работы": "Work Experience",
        "Компания: ООО 'ТехноСфера'": "Company: LLC 'TechnoSphere'",
        "Должность: Инженер по безопасности": "Position: Safety Engineer",
        "Период: 2015–2023": "Period: 2015–2023",
        "Патенты": "Patents",
        "Публикации и конкурсы": "Publications and Competitions",
        "&copy; 2023 Портфолио Эльдара Исаева": "&copy; 2023 Eldar Isaev's Portfolio"
    },
    en: {
        "Eldar Isaev": "Эльдар Исаев",
        "About Me": "Обо мне",
        "Projects": "Проекты",
        "Publications": "Публикации",
        "Contact": "Контакты",
        "Welcome to My Portfolio": "Добро пожаловать в мое портфолио",
        "I'm the deputy head of industrial safety at the Research Institute.": "Я заместитель начальника отдела промышленной безопасности в Научно-исследовательском институте.",
        "Experience and Education": "Опыт работы и образование",
        "Education": "Образование",
        "Samara State Technical University": "Самарский государственный технический университет",
        "Pipeline transportation. Design, construction and operation of gas and oil pipelines and gas and oil storage facilities.": "Трубопроводный транспорт. Проектирование, сооружение и эксплуатация газонефтепроводов и газонефтехранилищ.",
        "I.M. Gubkin Russian State University of Oil and Gas":"Российский государственный университет нефти и газа имени И. М. Губкина",
        "Pipeline transportation of oil, oil products and gas.": "Трубопроводный транспорт нефти, нефтепродуктов и газа.",
        "Russian Presidential Academy of National Economy and Public Administration (RANEPA)":"Российская академия народного хозяйства и государственной службы при Президенте РФ (РАНХиГС)",
        "State and municipal governance. Management of constituent entities of the Russian Federation":"Государственное и муниципальное управление. Управление субъектами РФ",
        "St. Petersburg Institute of Foreign Economic Relations, Economics and Law":"Санкт-Петербургский Институт Внешнеэкономических Связей, Экономики и Права",
        "Applied informatics, information systems in commercial management.":"Прикладная информатика, информационные системы в коммерческом менеджменте.",
        "Company: Transneft Research Institute":"Компания: НИИ 'Транснефть'",
        "Deputy Head of the Laboratory of Industrial Safety and Labor Protection":"Заместитель заведующего лабораторией промышленной безопасности и охраны труда",
        "Period: 2019":"Период: 2019",
        "Company: Transneft Research Institute":"Компания: НИИ 'Транснефть'",
        "Senior Scientific Associate":"Старший научный сотрудник",
        "Period: 2017-2019":"Период: 2017-2019",
        "Company: LLC 'Transneft - Far East'":"Компания: ООО 'Транснефть – Дальний Восток'",
        "Leading engineer of industrial safety and production control service":"Ведущий инженер службы промышленной безопасности и производственного контроля",
        "Period: 2012-2017":"Период: 2012-2017",
        "Company: 'Far Eastern Department of Rostechnadzor'":"Компания: 'Дальневосточное управление Ростехнадзора'",
        "Chief State Inspector of the Control and Analytical Permitting and ACS Department":"Главный государственный инспектор отдела контрольно-аналитического разрешительной деятельности и АСУ",
        "Period: 2011-2012":"Период: 2011-2012",
        "Scientific works":"Научные работы",
        "Cost-effectiveness assessment of industrial safety measures at hazardous production facilities of the main pipeline transportation of oil and oil products":"Оценка эффективности затрат на выполнение мероприятий по промышленной безопасности на опасных производственных объектах магистрального трубопроводного транспорта нефти и нефтепродуктов",
        "Requirements to the automated system of control of risks associated with the occurred preconditions to incidents, incidents and accidents in OST (ASCR)":"Требования к автоматизированной системе контроля рисков, связанных с произошедшими предпосылками к инцидентам, инцидентами и авариями в ОСТ (АСКР)",
        "Investigation of technologies for application of liquid hydrocarbon detectors at pipeline crossings with important objects of transportation infrastructure":"Исследование технологий применения детекторов жидких углеводородов в местах пересечения трубопроводов с важными объектами транспортной инфраструктуры",
        "Study and formation of blocks of safety measures to be included in the safety work permits when preparing and carrying out fire, gas hazardous works and high risk works at the facilities of the organizations of the 'Transneft' system (ASCR).":"Исследование и формирование блоков мероприятий по обеспечению безопасности, включаемых в наряды-допуски при подготовке и проведении огневых, газоопасных работ и работ повышенной опасности на объектах организаций системы 'Транснефть' (АСКР)",
        "Requirements to the system of analyzing the functioning of the industrial safety management system, allowing to transfer information on technogenic events of the 4th level, block 'Documentary support of industrial safety'.":"Требования к системе анализа функционирования системы управления промышленной безопасностью, позволяющей передавать информацию о техногенных событиях 4-го уровня, блок 'Документационное обеспечение промышленной безопасности'",
        "Study of factors and indicators of accidents at the facilities of trunk pipeline transport of the world's leading companies, development of recommendations to improve the level of safety of operation of the facilities of the 'Transneft' system organizations.":"Исследование факторов и показателей аварийности на объектах магистрального трубопроводного транспорта ведущих мировых компаний, разработка рекомендаций по повышению уровня безопасности эксплуатации объектов организаций системы 'Транснефть'",
        "Study of factors and indicators of accidents in Transneft's trunk oil and petroleum product transportation and global peers":"Исследование факторов и показателей аварийности магистрального транспорта нефти и нефтепродуктов 'Транснефти' и мировых компаний- аналогов",
        "Comprehensive tank integrity system":"Комплексная система обеспечения целостности резервуара",
        "System for ensuring safety of personnel at fuel and energy facilities, which include operation of oil/oil product tank farms":"Система обеспечения безопасности персонала объектов ТЭК, в составе которых осуществляется эксплуатация резервуарных парков нефти/нефтепродуктов",
        "Automation of the work of the emergency response headquarters at trunk pipeline transportation facilities":"Автоматизация работы штаба ликвидации чрезвычайной ситуации на объектах магистрального трубопроводного транспорта",
        "System for ensuring accident-free excavation works at fuel and energy facilities":"Система обеспечения безаварийного проведения земляных работ на объектах ТЭК",
        "Improvement of the organizations' occupational safety management system by introducing interactive 3D briefings":"Совершенствование системы управления охраной труда организаций путем внедрения интерактивного 3D инструктажа",
        "Improving the safety of fire and gas hazardous operations using a system of constant control of the concentration of hydrocarbon vapors of oil and oil products":"Повышение безопасности производства огневых и газоопасных работ с использованием системы постоянного контроля концентрации паров углеводородов нефти и нефтепродуктов",
        "Competitions":"Конкурсы",
        "Oil vaporization metering and control unit":"Блок учета и контроля испарений нефти",
        "Automation of the work of the headquarters for emergency response at the main pipeline facilities":"Автоматизация работы штаба по ликвидации чрезвычайной ситуации на объектах магистрального трубопровода",
        "Automated Failure Accounting System of LLC 'Transneft - Far East' (AIS 'Failure')":"Автоматизированная система учета отказов ООО 'Транснефть - Дальний Восток' (АИС 'ОТКАЗ')",
        "Improving the safety of fire and gas hazardous operations using a system of constant control of the concentration of hydrocarbon vapors of oil and oil products":"Повышение безопасности производства огневых и газоопасных работ с использованием системы постоянного контроля концентрации паров углеводородов нефти и нефтепродуктов",
        "Cost reduction by 15% while maintaining the safety level. Implemented in the practice of LLC 'Transneft'":"Снижение затрат на 15% при сохранении уровня безопасности. Внедрено в практику ООО 'Транснефть'",
        "Increased accuracy of risk analysis by 25%. Implemented in LLC 'Transneft - Far East'":"Повышение точности анализа рисков на 25%. Внедрено в ООО 'Транснефть – Дальний Восток'",
        "Reduction of accident risk by 20%. Implemented at 'Transneft' facilities":"Снижение риска аварий на 20%. Внедрено на объектах ООО 'Транснефть'",
        "Reduction of work violations by 30%. Implemented in LLC 'Transneft'":"Снижение нарушений при проведении работ на 30%. Внедрено в ООО 'Транснефть'",
        "Increased efficiency of safety management by 20%. Implemented in LLC 'Transneft - Far East'":"Повышение эффективности управления безопасностью на 20%. Внедрено в ООО 'Транснефть – Дальний Восток'",
        "Reduction of accident rate by 15%. Recommendations are implemented in practice of LLC 'Transneft'":"Снижение аварийности на 15%. Рекомендации внедрены в практику ООО 'Транснефть'",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "Work Experience": "Опыт работы",
        "Company: LLC 'TechnoSphere'": "Компания: ООО 'ТехноСфера'",
        "Position: Safety Engineer": "Должность: Инженер по безопасности",
        "Period: 2015–2023": "Период: 2015–2023",
        "Patents": "Патенты",
        "Publications and Competitions": "Публикации и конкурсы",
        "&copy; 2023 Eldar Isaev's Portfolio": "&copy; 2023 Портфолио Эльдара Исаева"
    }
};

// Функция для перевода текста
function translatePage(lang) {
    const elements = document.querySelectorAll("[data-lang]");
    elements.forEach((element) => {
        const key = element.textContent.trim();
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Обновляем атрибут alt изображения
    const images = document.querySelectorAll("img[data-lang]");
    images.forEach((image) => {
        const key = image.getAttribute("alt");
        if (translations[lang][key]) {
            image.setAttribute("alt", translations[lang][key]);
        }
    });
}