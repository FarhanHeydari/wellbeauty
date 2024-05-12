import React, { useState, useEffect } from 'react';
import { Box, Radio, RadioGroup, FormControlLabel, FormControl, Checkbox, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ArrowBack, ArrowForward } from '@mui/icons-material';




const SkinQuiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [selectedValue, setSelectedValue] = useState(null);
    const [selected, setSelected] = useState([]);
    const [question, setQuestion] = useState('کدام‌ یک از این اختلالات پوستی را داشته‌اید؟');
    const [options, setOptions] = useState(['سبوریا (درحال حاضر یا گذشته) ', 'آکنه (درحال حاضر یا گذشته)', 'رزاسه (درحال حاضر یا گذشته)', 'هیچکدام از موارد فوق']);
    const [values, setValues] = useState(["seborrhea", "acne", 'rosacea', 'none']);
    const [unknownStep, setUnknownStep] = useState(0);
    const [unknownScore, setUnknownScore] = useState(0);
    const [finished, setFinished] = useState(false);

    const unknownQuestions_1 = [{
        text: 'پس از شستشوی صورت، مرطوب‌کننده، ضدآفتاب یا ماده دیگری استفاده نکنید. پس از 2 ساعت در آینه به صورت خود نگاه کنید. حالت پوست پیشانی شما:',
        options: ['براق با انعکاس نور است', 'به خوبی هیدراته شده و بدون بازتاب نور است', 'کشیده است', 'بسیار زبر، پوسته پوسته یا خاکستری است'],
        values: [1, 2, 3, 4]
    },
    {
        text: 'در عکس‌ها، پیشانی شما براق به نظر می‌رسد؟',
        options: ['هیچوقت - یا متوجه براق بودنش نشدم', 'گاهی اوقات', 'اغلب', 'همیشه'],
        values: [1, 2, 3, 4]
    },
    {
        text: 'دو ساعت پس از استفاده از زیرسازهای آرایشی (به جز مواد پودری)، آرایش شما چگونه دیده می‌شود؟',
        options: ['پوسته پوسته یا ترک‌خورده به همراه چین و چروک', 'صاف', 'براق', 'رگه‌دار و براق', 'من زیرساز آرایشی استفاده نمی‌کنم'],
        values: [1, 2, 3, 4, 0]
    },
    {
        text: 'هنگامی که در محیط کم‌رطوبت هستید، اگر از مرطوب‌کننده یا ضدآفتاب استفاده نکنید، پوست شما:',
        options: ['احساس خشکی زیاد یا تَرک زدن دارد ', 'احساس کشیدگی دارد', 'احساس حالت عادی دارد', 'براق به نظر می‌رسد، یا هیچ‌وقت احساس نیاز به مرطوب‌کننده نمی‌کنم', 'نمی‌دانم'],
        values: [1, 2, 3, 4, 0]
    },
    {
        text: 'در یک آینه بزرگ‌نما به صورت خود نگاه کنید. چه تعداد منافذ بزرگ، به اندازه نوک سوزن یا بزرگ‌تر دارید؟',
        options: ['فقط در ناحیه T (پیشانی و بینی)', 'زیاد', 'خیلی زیاد!', 'نمی‌دانم'],
        values: [1, 2, 3, 0]

    },
    {
        text: 'پوست صورت خود را چگونه توصیف می‌کنید؟',
        options: ['خشک', 'نرمال', 'چرب', 'ترکیبی'],
        values: [1, 2, 3, 4]
    },
    {
        text: 'هنگامی که از صابونی استفاده می‌کنید که به شدت کف و حباب تولید می‌کند، پوست صورت شما:',
        options: ['احساس خشکی یا ترک‌خوردگی دارد', 'کمی خشک اما ترک نمی‌خورد', 'احساس طبیعی دارد', 'احساس چرب بودن دارد', 'من از صابون استفاده نمی‌کنم'],
        values: [1, 2, 3, 4, 0]
    },
    {
        text: 'اگر پوستتان مرطوب نشود، احساس کشیدگی می‌کنید؟',
        options: ['همیشه', 'گاهی اوقات', 'به ندرت', 'هرگز'],
        values: [0, 1, 2, 3]
    },
    {
        text: 'روی پوستتان منافذ مسدود شده دارید (جوش‌های سرسیاه یا سرسفید):',
        options: ['هرگز', 'به ندرت', 'گاهی اوقات', 'همیشه'],
        values: [1, 2, 3, 4]
    },
    {
        text: 'پوستتان در ناحیه T (پیشانی و دماغ) چرب است',
        options: ['هرگز', 'گاهی اوقات', 'اغلب اوقات', 'همیشه'],
        values: [1, 2, 3, 4]
    }];

    const unknownQuestions_2 = [
        {
            text: 'پس از ایجاد جوش یا موهای زیرپوستی، به دنبال آن لکه قهوه‌ای تیره/ سیاه ظاهر می‌شود:',
            options: ['هرگز', 'گاهی اوقات', 'اغلب', 'همیشه', 'هرگز دچار جوش یا موهای زیرپوستی نمی‌شوم'],
            values: [1, 2, 3, 4, 0]
        },
        {
            text: 'پس از اینکه پوست خود را بریدید، لکه قهوه‌ای (نه صورتی) تا چه مدت روی پوست شما باقی می‌ماند؟',
            options: ['لکه قهوه‌ای نمی‌بینم', 'یک هفته', 'چند هفته', 'چند ماه'],
            values: [1, 2, 3, 4]
        },
        {
            text: 'در دوران بارداری یا مصرف قرص‌های ضدبارداری، چند لکه تیره روی صورت خود مشاهده کردید؟',
            options: ['هیچ', 'یک ', 'چند ', 'خیلی', 'این سوال برای من صدق نمی‌کند (چون مرد هستم، یا به این دلیل که هرگز باردار نشده‌ام یا قرص‌های ضد بارداری مصرف نکرده‌ام، یا به این دلیل که مطمئن نیستم لکه‌های تیره داشتم یا نه)'],
            values: [1, 2, 3, 4, 0]
        },
        {
            text: 'آیا ملاسما، لکه‌های قهوه‌ای روشن یا تیره یا خاکستری روی صورتتان تشخیص داده شده است؟',
            options: ['خیر', 'یک بار، اما از بین رفت', 'بله', 'بله، یک مورد شدید', 'مطمئن نیستم'],
            values: [1, 2, 3, 4, 0]
        },
        {
            text: 'آیا لکه‌های قهوه‌ای کوچک (کک و مک یا لکه‌های ناشی از نور خورشید) روی صورت، سینه یا پشت خود دارید یا تا به حال داشته‌اید؟',
            options: ['خیر', 'بله، چند عدد (1 تا 5)', 'بله، تعداد زیاد (6 تا 15)', 'بله، بسیار زیاد! (16 یا بیشتر)'],
            values: [1, 2, 3, 4]
        },
        {
            text: 'هنگامی که برای اولین بار پس از چند ماه در معرض نور خورشید قرار می‌گیرید، پوست شما:',
            options: ['فقط می‌سوزد', 'می‌سوزد، سپس تیره‌تر می‌شود', 'تیره‌تر می‌شود', 'پوست من در حال حاضر تیره است، بنابراین به سختی می‌توان دید که آیا تیره‌تر می‌شود یا خیر'],
            values: [1, 2, 3, 4]
        },
        {
            text: 'پس از اینکه چند روز متوالی در معرض نور خورشید قرار گرفتید چه اتفاقی می‌افتد؟ ',
            options: ['دچار آفتاب‌ سوختگی و تاول می‌زنم اما رنگ پوستم تغییر نمی‌کند', 'پوست من کمی تیره‌تر می‌شود', 'پوست من خیلی تیره‌تر می‌شود', 'پوست من در حال حاضر تیره است، بنابراین به سختی می‌توان دید که آیا تیره‌تر می‌شود یا خیر'],
            values: [1, 2, 3, 4]
        },
        {
            text: 'آیا وقتی زیر نور خورشید می‌روید، روی پوستتان کک و مک‌ها بیشتر می‌شوند (لکه‌های مسطح کوچک به اندازه 1 تا 2 میلی‌متر)؟',
            options: ['نه، هرگز بیشتر نمی‌شوند', 'هر سال چند کک و مک جدید روی پوست من ایجاد می‌شود', 'کمی بدتر', 'خیلی بدتر', 'من هرگز زیر  نور خورشید نمی‌روم'],
            values: [1, 2, 3, 4, 0]
        },
        {
            text: 'آیا خودتان یا در خانواده نزدیکتان سابقه ملانوما دارید؟',
            options: ['خیر', 'یک نفر در خانواده', 'بیش از یک نفر', 'من سابقه ملانوما دارم', 'مطمئن نیستم'],
            values: [1, 2, 3, 4, 0]
        },
        {
            text: 'وقتی زیر نور خورشید می‌روید لکه‌های تیره روی صورتتان بدتر می‌شوند؟',
            options: ['لکه تیره روی پوستم ندارم', 'مطمئن نیستم', 'کمی بدتر', 'خیلی بدتر'],
            values: [1, 0, 2, 3]
        },
    ];

    const unknownQuestions_3 = [{
        text: 'نه، حتی با حرکاتی مانند لبخند زدن، اخم کردن یا بالا بردن ابروها',
        options: ['نه، حتی با حرکاتی مانند لبخند زدن، اخم کردن یا بالا بردن ابروها', 'فقط زمانی که حرکت می‌کنم، مانند لبخند زدن، اخم کردن یا بالا بردن ابرو', 'بله، با حرکت و تعداد کمی در حالت استراحت بدون حرکت', 'چین و چروک حتی وقتی لبخند نمی‌زنم، اخم نمی‌کنم یا ابروهایم را بالا نمی‌برم هم وجود دارد'],
        values: [1, 2, 3, 4]
    },
    {
        text: 'پوست صورت مادرتان چند ساله به نظر می‌رسید/ می‌رسد؟',
        options: ['5 تا 10 سال جوان‌تر از سن واقعی‌اش', 'هم‌سن خودش', '5 سال پیرتر از سن واقعی‌اش', 'بیش از 5 سال پیرتر از سن واقعی‌اش', 'قابل اجرا نیست'],
        values: [1, 2, 3, 4, 0]
    },
    {
        text: 'پوست صورت پدرتان چند ساله به نظر می‌رسید/ می‌رسد؟',
        options: ['5 تا 10 سال جوان‌تر از سن واقعی‌اش', 'هم‌سن خودش', '5 سال پیرتر از سن واقعی‌اش', 'بیش از 5 سال پیرتر از سن واقعی‌اش', 'قابل اجرا نیست'],
        values: [1, 2, 3, 4, 0]
    },
    {
        text: 'با توجه به محل‌های زندگیتان، هرروز چقدر در معرض نور خورشید قرار گرفته‌اید؟',
        options: ['کم؛ من بیشتر در مناطق با آب و هوای ابری زندگی کرده‌ام', 'گاهی اوقات؛ من گاهی اوقات در مکان‌های با آب و هوای ابری زندگی کرده‌ام، اما همچنین در مکان‌هایی با نور خورشید منظم‌تر زندگی کرده‌ام', 'متوسط؛ من در مکان‌هایی با مقدار مناسبی از نور خورشید زندگی کرده‌ام', 'زیاد؛ من در مناطق گرمسیری، شمالی یا بسیار آفتابی زندگی کرده‌ام'],
        values: [1, 2, 3, 4]
    },
    {
        text: 'فکر می‌کنید چندساله به نظر می‌رسید؟',
        options: ['1 تا 5 سال کوچک‌تر از سن خود', 'هم‌سن خودم', '5 سال بزرگ‌تر از سن خود', 'بیش از 5 سال بزرگ‌تر از خود'],
        values: [1, 2, 3, 4]
    },
    {
        text: 'چند بار به سولاریوم رفته‌اید؟',
        options: ['هیچ‌وقت', '1 تا 5 بار', '6 تا 10 بار', 'بیش از 10 بار'],
        values: [1, 2, 3, 4]
    },
    {
        text: 'در طول زندگی خود، چند نخ سیگار کشیده‌اید (یا در معرض آن قرار گرفته‌اید)؟',
        options: ['هیچ', 'چند پاکت', 'چند تا چندین پاکت', 'هر روز سیگار می‌کشم', 'هرگز سیگار نکشیده‌ام، اما والدینم یا همکارانم به طور مرتب در حضور من سیگار کشیده‌اند'],
        values: [1, 2, 3, 4, 0]
    },
    {
        text: 'آب و هوای محل زندگی خود را توصیف کنید',
        options: ['هوا تازه و تمیز است', 'بخشی از سال، اما نه تمام سال، در مکانی با هوای پاک زندگی کرده‌ام', 'هوا کمی آلوده است', 'هوا بسیار آلوده است'],
        values: [1, 2, 3, 4]
    },
    {
        text: 'چه مدت از کرم‌های صورت رتینوئیدی مانند رتینول استفاده کرده‌اید؟',
        options: ['چندین سال', 'گاهی اوقات', 'یک بار برای آکنه چندین سال پیش', 'هیچ‌وقت'],
        values: [1, 2, 3, 4]
    },
    {
        text: 'چند بار میوه و سبزیجات می‌خورید؟',
        options: ['در هر وعده غذایی', 'روزی یک بار', 'گاهی اوقات', 'هیچ‌وقت'],
        values: [1, 2, 3, 4]
    },];

    const questions = [
        {
            text: 'کدام‌ یک از این اختلالات پوستی را داشته‌اید؟',
            options: ['سبوریا (درحال حاضر یا گذشته) ', 'آکنه (درحال حاضر یا گذشته)', 'رزاسه (درحال حاضر یا گذشته)', 'هیچکدام از موارد فوق'],
            values: ["seborrhea", "acne", 'rosacea', 'none']
        },
        {
            text: '',
            options: [],
        },

        {
            text: '',
            options: [],
        },
        {
            text: '',
            options: [],
        },
        {
            text: '',
            options: [],
        },
        {
            text: '',
            options: [],
        },
        {
            text: '',
            options: [],
        },
        {
            text: '',
            options: [],
        },
        {
            text: '',
            options: [],
        },
        {
            text: '',
            options: [],
        },
        {
            text: '',
            options: [],
        },
        {
            text: '',
            options: [],
        },
        {
            text: '',
            options: [],
        },
        {
            text: '',
            options: [],
        },
        {
            text: '',
            options: [],
        },
        {
            text: '',
            options: [],
        },
        {
            text: '',
            options: [],
        },
        {
            text: '',
            options: [],
        },
        {
            text: '',
            options: [],
        },
        {
            text: '',
            options: [],
        },
    ];



    const handleAnswer = (answer) => {
        
        let lastAnswer = answers[answers.length - 1];
        if (lastAnswer === "unknown_1") {
            setAnswers(prevAnswers => {
                let newAnswers = [...prevAnswers]; // Create a copy of the previous state
                newAnswers[newAnswers.length - 1] = "unknown_1";
                return newAnswers;
            });
        } else if (lastAnswer === "unknown2") {
            setAnswers(prevAnswers => {
                let newAnswers = [...prevAnswers]; // Create a copy of the previous state
                newAnswers[newAnswers.length - 1] = "unknown2";
                return newAnswers;
            });
        } else if (lastAnswer === "unknown3") {
            setAnswers(prevAnswers => {
                let newAnswers = [...prevAnswers]; // Create a copy of the previous state
                newAnswers[newAnswers.length - 1] = "unknown3";
                return newAnswers;
            });
        }
        else {
            setAnswers([...answers, answer]);


        }
    };

    useEffect(() => {
        console.log(answers);
        let lastAnswer = answers[answers.length - 1];
        const conditions = ['DRNT', 'DRPT', 'DRNW', 'ORNT', 'ORPT', 'ORNW', 'OSNT', 'OSPT', 'OSNW', 'DSPW', 'DSTP', 'DSNW', 'OSPW', 'OSPT', 'OSNW', 'DSPW', 'DSTP', 'DSNW']
        if (answers.length > 0) {
            for (let i = 0; i < conditions.length; i++) {
                if (answers[answers.length - 1] === conditions[i]) {
                    console.log("yes"); 
                    setCurrentQuestion(questions.length + 1)
                    setFinished(true)
                }
            }
            
        }
        if (selectedValue) {
            if (lastAnswer === "seborrhea") {
                setQuestion("آیا پوست شما چرب است یا خشک؟");
                setOptions(['چرب', 'خشک', 'نمی دانم']);
                setValues(["seborrhea_oily", "seborrhea_dry", "unknown_1"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "seborrhea_dry") {
                setQuestion("این بخش توانایی بدن شما را برای تشکیل ملانین، رنگدانه‌ای که رنگ پوست تیره‌تر و همچنین لکه‌ها، کک و مک و نواحی تیره روی پوست را تولید می‌کند، اندازه‌گیری می‌کند. آیا پوست شما مستعد تولید رنگدانه است؟");
                setOptions(['بله', 'خیر', 'نمی دانم']);
                setValues(["seborrhea_dry_pigmented", "seborrhea_dry_nonpigmented", "unknown2"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "seborrhea_oily") {
                setQuestion("این بخش توانایی بدن شما را برای تشکیل ملانین، رنگدانه‌ای که رنگ پوست تیره‌تر و همچنین لکه‌ها، کک و مک و نواحی تیره روی پوست را تولید می‌کند، اندازه‌گیری می‌کند. آیا پوست شما مستعد تولید رنگدانه است؟");
                setOptions(['بله', 'خیر', 'نمی دانم']);
                setValues(["seborrhea_oily_pigmented", "seborrhea_oily_nonpigmented", "unknown2"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "seborrhea_oily_pigmented") {
                setQuestion("آیا پوست شما چین و چروک دارد یا کشیده است؟");
                setOptions(['چین و چروک دارد', 'کشیده است', "نمی دانم"]);
                setValues(["OSPW", "OSPT", "unknown3"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "seborrhea_oily_nonpigmented") {
                setQuestion("آیا پوست شما چین و چروک دارد یا کشیده است؟");
                setOptions(['چین و چروک دارد', 'کشیده است', "نمی دانم"]);
                setValues(["OSNW", "OSNT", "unknown3"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "seborrhea_dry_pigmented") {
                setQuestion("آیا پوست شما چین و چروک دارد یا کشیده است؟");
                setOptions(['چین و چروک دارد', 'کشیده است', "نمی دانم"]);
                setValues(["DSPW", "DSTP", "unknown3"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "seborrhea_dry_nonpigmented") {
                setQuestion("آیا پوست شما چین و چروک دارد یا کشیده است؟");
                setOptions(['چین و چروک دارد', 'کشیده است', "نمی دانم"]);
                setValues(["DSNW", "DSNT", "unknown3"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "rosacea") {
                setQuestion("آیا پوست شما چرب است یا خشک؟");
                setOptions(['چرب', 'خشک', 'نمی دانم']);
                setValues(["rosacea_oily", "rosacea_dry", "unknown_1"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "rosacea_dry") {
                setQuestion("این بخش توانایی بدن شما را برای تشکیل ملانین، رنگدانه‌ای که رنگ پوست تیره‌تر و همچنین لکه‌ها، کک و مک و نواحی تیره روی پوست را تولید می‌کند، اندازه‌گیری می‌کند. آیا پوست شما مستعد تولید رنگدانه است؟");
                setOptions(['بله', 'خیر', 'نمی دانم']);
                setValues(["rosacea_dry_pigmented", "rosacea_dry_nonpigmented", "unknown2"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "rosacea_oily") {
                setQuestion("این بخش توانایی بدن شما را برای تشکیل ملانین، رنگدانه‌ای که رنگ پوست تیره‌تر و همچنین لکه‌ها، کک و مک و نواحی تیره روی پوست را تولید می‌کند، اندازه‌گیری می‌کند. آیا پوست شما مستعد تولید رنگدانه است؟");
                setOptions(['بله', 'خیر', 'نمی دانم']);
                setValues(["rosacea_oily_pigmented", "rosacea_oily_nonpigmented", "unknown2"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "rosacea_oily_pigmented") {
                setQuestion("آیا پوست شما چین و چروک دارد یا کشیده است؟");
                setOptions(['چین و چروک دارد', 'کشیده است', "نمی دانم"]);
                setValues(["OSPW", "OSPT", "unknown3"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "rosacea_oily_nonpigmented") {
                setQuestion("آیا پوست شما چین و چروک دارد یا کشیده است؟");
                setOptions(['چین و چروک دارد', 'کشیده است', "نمی دانم"]);
                setValues(["OSNW", "OSNT", "unknown3"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "rosacea_dry_pigmented") {
                setQuestion("آیا پوست شما چین و چروک دارد یا کشیده است؟");
                setOptions(['چین و چروک دارد', 'کشیده است', "نمی دانم"]);
                setValues(["DSPW", "DSTP", "unknown3"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "rosacea_dry_nonpigmented") {
                setQuestion("آیا پوست شما چین و چروک دارد یا کشیده است؟");
                setOptions(['چین و چروک دارد', 'کشیده است', "نمی دانم"]);
                setValues(["DSNW", "DSNT", "unknown3"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "acne") {
                setQuestion("این بخش توانایی بدن شما را برای تشکیل ملانین، رنگدانه‌ای که رنگ پوست تیره‌تر و همچنین لکه‌ها، کک و مک و نواحی تیره روی پوست را تولید می‌کند، اندازه‌گیری می‌کند. آیا پوست شما مستعد تولید رنگدانه است؟");
                setOptions(['بله', 'خیر', 'نمی دانم']);
                setValues(["acne_pigmented", "acne_nonpigmented", "unknown2"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "acne_pigmented") {
                setQuestion("آیا پوست شما چین و چروک دارد یا کشیده است؟");
                setOptions(['چین و چروک دارد', 'کشیده است', "نمی دانم"]);
                setValues(["OSPW", "OSPT", "unknown3"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "acne_nonpigmented") {
                setQuestion("آیا پوست شما چین و چروک دارد یا کشیده است؟");
                setOptions(['چین و چروک دارد', 'کشیده است', "نمی دانم"]);
                setValues(["OSNW", "OSNT", "unknown3"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none") {
                setQuestion("برجستگی‌های قرمز روی صورت خود دارید:");
                setOptions(['هیچ‌وقت', 'به ندرت', "حداقل یک بار در ماه", "حداقل یک بار در هفته"]);
                setValues(["none_dud", "none_dud", "none_dud", "none_dud"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud") {
                setQuestion("شما پس از استفاده از مواد آرایشی، ضد آفتاب یا محصولات مراقبت پوستی دچار قرمزی، خارش و یا التهاب می‌شوید:");
                setOptions(['اغلب', 'همیشه', "هرگز", "گاهی اوقات", 'من از این محصولات استفاده نمی‌کنم']);
                setValues(["none_dud_yes", "none_dud_yes", "none_dud_no", "none_dud_no", "none_dud_no"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_yes") {
                setQuestion("آیا پوست شما چرب است یا خشک؟");
                setOptions(['چرب', 'خشک', "نمی‌دانم"]);
                setValues(["none_dud_yes_oily", "none_dud_yes_dry", "unknown1"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_yes_dry") {
                setQuestion("این بخش توانایی بدن شما را برای تشکیل ملانین، رنگدانه‌ای که رنگ پوست تیره‌تر و همچنین لکه‌ها، کک و مک و نواحی تیره روی پوست را تولید می‌کند، اندازه‌گیری می‌کند. آیا پوست شما مستعد تولید رنگدانه است؟");
                setOptions(['بله', 'خیر', 'نمی دانم']);
                setValues(["none_dud_yes_dry_pigmented", "none_dud_yes_dry_nonpigmented", "unknown2"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_yes_oily") {
                setQuestion("این بخش توانایی بدن شما را برای تشکیل ملانین، رنگدانه‌ای که رنگ پوست تیره‌تر و همچنین لکه‌ها، کک و مک و نواحی تیره روی پوست را تولید می‌کند، اندازه‌گیری می‌کند. آیا پوست شما مستعد تولید رنگدانه است؟");
                setOptions(['بله', 'خیر', 'نمی دانم']);
                setValues(["none_dud_yes_oily_pigmented", "none_dud_yes_oily_nonpigmented", "unknown2"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_yes_oily_pigmented") {
                setQuestion("آیا پوست شما چین و چروک دارد یا کشیده است؟");
                setOptions(['چین و چروک دارد', 'کشیده است', "نمی دانم"]);
                setValues(["OSPW", "OSPT", "unknown3"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_yes_oily_nonpigmented") {
                setQuestion("آیا پوست شما چین و چروک دارد یا کشیده است؟");
                setOptions(['چین و چروک دارد', 'کشیده است', "نمی دانم"]);
                setValues(["OSNW", "OSNT", "unknown3"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_yes_dry_pigmented") {
                setQuestion("آیا پوست شما چین و چروک دارد یا کشیده است؟");
                setOptions(['چین و چروک دارد', 'کشیده است', "نمی دانم"]);
                setValues(["DSPW", "DSTP", "unknown3"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_yes_dry_nonpigmented") {
                setQuestion("آیا پوست شما چین و چروک دارد یا کشیده است؟");
                setOptions(['چین و چروک دارد', 'کشیده است', "نمی دانم"]);
                setValues(["DSNW", "DSNT", "unknown3"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no") {
                setQuestion("اگر جواهراتی که طلا نیستند استفاده کنید، چند وقت یک بار پوستتان جوش می‌زند؟");
                setOptions(['اغلب', 'همیشه', "هرگز", 'به ندرت', 'مطمئن نیستم']);
                setValues(["none_dud_no_yes", "none_dud_no_yes", "none_dud_no_no", "none_dud_no_no", "none_dud_no_no"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_yes") {
                setQuestion("آیا پوست شما چرب است یا خشک؟");
                setOptions(['چرب', 'خشک', "نمی‌دانم"]);
                setValues(["none_dud_no_yes_oily", "none_dud_no_yes_dry", "unknown1"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_yes_dry") {
                setQuestion("این بخش توانایی بدن شما را برای تشکیل ملانین، رنگدانه‌ای که رنگ پوست تیره‌تر و همچنین لکه‌ها، کک و مک و نواحی تیره روی پوست را تولید می‌کند، اندازه‌گیری می‌کند. آیا پوست شما مستعد تولید رنگدانه است؟");
                setOptions(['بله', 'خیر', 'نمی دانم']);
                setValues(["none_dud_no_yes_dry_pigmented", "none_dud_no_yes_dry_nonpigmented", "unknown2"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_yes_oily") {
                setQuestion("این بخش توانایی بدن شما را برای تشکیل ملانین، رنگدانه‌ای که رنگ پوست تیره‌تر و همچنین لکه‌ها، کک و مک و نواحی تیره روی پوست را تولید می‌کند، اندازه‌گیری می‌کند. آیا پوست شما مستعد تولید رنگدانه است؟");
                setOptions(['بله', 'خیر', 'نمی دانم']);
                setValues(["none_dud_no_yes_oily_pigmented", "none_dud_no_yes_oily_nonpigmented", "unknown2"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_yes_oily_pigmented") {
                setQuestion("آیا پوست شما چین و چروک دارد یا کشیده است؟");
                setOptions(['چین و چروک دارد', 'کشیده است', "نمی دانم"]);
                setValues(["OSPW", "OSPT", "unknown3"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_yes_oily_nonpigmented") {
                setQuestion("آیا پوست شما چین و چروک دارد یا کشیده است؟");
                setOptions(['چین و چروک دارد', 'کشیده است', "نمی دانم"]);
                setValues(["OSNW", "OSNT", "unknown3"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_yes_dry_pigmented") {
                setQuestion("آیا پوست شما چین و چروک دارد یا کشیده است؟");
                setOptions(['چین و چروک دارد', 'کشیده است', "نمی دانم"]);
                setValues(["DSPW", "DSTP", "unknown3"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_yes_dry_nonpigmented") {
                setQuestion("آیا پوست شما چین و چروک دارد یا کشیده است؟");
                setOptions(['چین و چروک دارد', 'کشیده است', "نمی دانم"]);
                setValues(["DSNW", "DSNT", "unknown3"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_no") {
                setQuestion("آیا تا به حال درماتیت آتوپیک، اگزما یا درماتیت تماسی (بثورات پوستی آلرژیک) در پوست شما تشخیص داده شده است؟");
                setOptions(['بله', 'بله، یک مورد شدید', "خیر", "اطرافیان به من می‌گویند دارم", "مطمئن نیستم"]);
                setValues(["none_dud_no_no_yes", "none_dud_no_no_yes", "none_dud_no_no_no", "none_dud_no_no_no", "none_dud_no_no_no"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_no_yes") {
                setQuestion("آیا پوست شما چرب است یا خشک؟");
                setOptions(['چرب', 'خشک', "نمی‌دانم"]);
                setValues(["none_dud_no_no_yes_oily", "none_dud_no_no_yes_dry", "unknown1"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_no_yes_dry") {
                setQuestion("این بخش توانایی بدن شما را برای تشکیل ملانین، رنگدانه‌ای که رنگ پوست تیره‌تر و همچنین لکه‌ها، کک و مک و نواحی تیره روی پوست را تولید می‌کند، اندازه‌گیری می‌کند. آیا پوست شما مستعد تولید رنگدانه است؟");
                setOptions(['بله', 'خیر', 'نمی دانم']);
                setValues(["none_dud_no_no_yes_dry_pigmented", "none_dud_no_no_yes_dry_nonpigmented", "unknown2"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_no_yes_oily") {
                setQuestion("این بخش توانایی بدن شما را برای تشکیل ملانین، رنگدانه‌ای که رنگ پوست تیره‌تر و همچنین لکه‌ها، کک و مک و نواحی تیره روی پوست را تولید می‌کند، اندازه‌گیری می‌کند. آیا پوست شما مستعد تولید رنگدانه است؟");
                setOptions(['بله', 'خیر', 'نمی دانم']);
                setValues(["none_dud_no_no_yes_oily_pigmented", "none_dud_no_no_yes_oily_nonpigmented", "unknown2"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_no_yes_oily_pigmented") {
                setQuestion("آیا پوست شما چین و چروک دارد یا کشیده است؟");
                setOptions(['چین و چروک دارد', 'کشیده است', "نمی دانم"]);
                setValues(["OSPW", "OSPT", "unknown3"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_no_yes_oily_nonpigmented") {
                setQuestion("آیا پوست شما چین و چروک دارد یا کشیده است؟");
                setOptions(['چین و چروک دارد', 'کشیده است', "نمی دانم"]);
                setValues(["OSNW", "OSNT", "unknown3"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_no_yes_dry_pigmented") {
                setQuestion("آیا پوست شما چین و چروک دارد یا کشیده است؟");
                setOptions(['چین و چروک دارد', 'کشیده است', "نمی دانم"]);
                setValues(["DSPW", "DSTP", "unknown3"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_no_yes_dry_nonpigmented") {
                setQuestion("آیا پوست شما چین و چروک دارد یا کشیده است؟");
                setOptions(['چین و چروک دارد', 'کشیده است', "نمی دانم"]);
                setValues(["DSNW", "DSNT", "unknown3"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_no_no") {
                setQuestion("آیا عضوی از خانواده شما دچار درماتیت آتوپیک، اگزما، آسم و/یا آلرژی است؟");
                setOptions(['چند نفر از اعضای خانواده', 'بسیاری از اعضای خانواده من درماتیت، اگزما، آسم و/یا آلرژی دارند', "خیر", 'یکی از اعضای خانواده', 'مطمئن نیستم']);
                setValues(["none_dud_no_no_no_yes", "none_dud_no_no_no_yes", "none_dud_no_no_no_no", "none_dud_no_no_no_no", "none_dud_no_no_no_no"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_no_no_yes") {
                setQuestion("آیا پوست شما چرب است یا خشک؟");
                setOptions(['چرب', 'خشک', "نمی‌دانم"]);
                setValues(["none_dud_no_no_no_yes_oily", "none_dud_no_no_no_yes_dry", "unknown1"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_no_no_yes_dry") {
                setQuestion("این بخش توانایی بدن شما را برای تشکیل ملانین، رنگدانه‌ای که رنگ پوست تیره‌تر و همچنین لکه‌ها، کک و مک و نواحی تیره روی پوست را تولید می‌کند، اندازه‌گیری می‌کند. آیا پوست شما مستعد تولید رنگدانه است؟");
                setOptions(['بله', 'خیر', 'نمی دانم']);
                setValues(["none_dud_no_no_no_yes_dry_pigmented", "none_dud_no_no_no_yes_dry_nonpigmented", "unknown2"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_no_no_yes_oily") {
                setQuestion("این بخش توانایی بدن شما را برای تشکیل ملانین، رنگدانه‌ای که رنگ پوست تیره‌تر و همچنین لکه‌ها، کک و مک و نواحی تیره روی پوست را تولید می‌کند، اندازه‌گیری می‌کند. آیا پوست شما مستعد تولید رنگدانه است؟");
                setOptions(['بله', 'خیر', 'نمی دانم']);
                setValues(["none_dud_no_no_no_yes_oily_pigmented", "none_dud_no_no_no_yes_oily_nonpigmented", "unknown2"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_no_no_yes_oily_pigmented") {
                setQuestion("آیا پوست شما چین و چروک دارد یا کشیده است؟");
                setOptions(['چین و چروک دارد', 'کشیده است', "نمی دانم"]);
                setValues(["OSPW", "OSPT", "unknown3"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_no_no_yes_oily_nonpigmented") {
                setQuestion("آیا پوست شما چین و چروک دارد یا کشیده است؟");
                setOptions(['چین و چروک دارد', 'کشیده است', "نمی دانم"]);
                setValues(["OSNW", "OSNT", "unknown3"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_no_no_yes_dry_pigmented") {
                setQuestion("آیا پوست شما چین و چروک دارد یا کشیده است؟");
                setOptions(['چین و چروک دارد', 'کشیده است', "نمی دانم"]);
                setValues(["DSPW", "DSTP", "unknown3"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_no_no_yes_dry_nonpigmented") {
                setQuestion("آیا پوست شما چین و چروک دارد یا کشیده است؟");
                setOptions(['چین و چروک دارد', 'کشیده است', "نمی دانم"]);
                setValues(["DSNW", "DSNT", "unknown3"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_no_no_no") {
                setQuestion("هر چند وقت یک‌بار صورت شما بعد از ورزش متوسط و/یا با استرس یا عصبانیت سرخ می‌شود؟");
                setOptions(['اغلب', 'همیشه', "هرگز", 'گاهی اوقات']);
                setValues(["none_dud_no_no_no_no_yes", "none_dud_no_no_no_no_yes", "none_dud_no_no_no_no_no", 'none_dud_no_no_no_no_no']);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_no_no_no_yes") {
                setQuestion("آیا پوست شما چرب است یا خشک؟");
                setOptions(['چرب', 'خشک', "نمی‌دانم"]);
                setValues(["none_dud_no_no_no_no_yes_oily", "none_dud_no_no_no_no_yes_dry", "unknown1"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_no_no_no_yes_dry") {
                setQuestion("این بخش توانایی بدن شما را برای تشکیل ملانین، رنگدانه‌ای که رنگ پوست تیره‌تر و همچنین لکه‌ها، کک و مک و نواحی تیره روی پوست را تولید می‌کند، اندازه‌گیری می‌کند. آیا پوست شما مستعد تولید رنگدانه است؟");
                setOptions(['بله', 'خیر', 'نمی دانم']);
                setValues(["none_dud_no_no_no_no_yes_dry_pigmented", "none_dud_no_no_no_no_yes_dry_nonpigmented", "unknown2"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_no_no_no_yes_oily") {
                setQuestion("این بخش توانایی بدن شما را برای تشکیل ملانین، رنگدانه‌ای که رنگ پوست تیره‌تر و همچنین لکه‌ها، کک و مک و نواحی تیره روی پوست را تولید می‌کند، اندازه‌گیری می‌کند. آیا پوست شما مستعد تولید رنگدانه است؟");
                setOptions(['بله', 'خیر', 'نمی دانم']);
                setValues(["none_dud_no_no_no_no_yes_oily_pigmented", "none_dud_no_no_no_no_yes_oily_nonpigmented", "unknown2"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_no_no_no_yes_oily_pigmented") {
                setQuestion("آیا پوست شما چین و چروک دارد یا کشیده است؟");
                setOptions(['چین و چروک دارد', 'کشیده است', "نمی دانم"]);
                setValues(["OSPW", "OSPT", "unknown3"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_no_no_no_yes_oily_nonpigmented") {
                setQuestion("آیا پوست شما چین و چروک دارد یا کشیده است؟");
                setOptions(['چین و چروک دارد', 'کشیده است', "نمی دانم"]);
                setValues(["OSNW", "OSNT", "unknown3"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_no_no_no_yes_dry_pigmented") {
                setQuestion("آیا پوست شما چین و چروک دارد یا کشیده است؟");
                setOptions(['چین و چروک دارد', 'کشیده است', "نمی دانم"]);
                setValues(["DSPW", "DSTP", "unknown3"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_no_no_no_yes_nonpigmented") {
                setQuestion("آیا پوست شما چین و چروک دارد یا کشیده است؟");
                setOptions(['چین و چروک دارد', 'کشیده است', "نمی دانم"]);
                setValues(["DSNW", "DSNT", "unknown3"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_no_no_no_no") {
                setQuestion("هر چند وقت یک‌بار بعد از نوشیدن الکل پوست شما رو به سرخ شدن می‌رود؟");
                setOptions(['اغلب', 'همیشه', "هرگز", "گاهی اوقات", "الکل مصرف نمی‌‌کنم"]);
                setValues(["none_dud_no_no_no_no_no_yes", "none_dud_no_no_no_no_no_yes", "none_dud_no_no_no_no_no_no", "none_dud_no_no_no_no_no_no", "none_dud_no_no_no_no_no_no"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_no_no_no_no_yes") {
                setQuestion("آیا پوست شما چرب است یا خشک؟");
                setOptions(['چرب', 'خشک', "نمی‌دانم"]);
                setValues(["none_dud_no_no_no_no_no_yes_oily", "none_dud_no_no_no_no_no_yes_dry", "unknown1"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_no_no_no_no_yes_dry") {
                setQuestion("این بخش توانایی بدن شما را برای تشکیل ملانین، رنگدانه‌ای که رنگ پوست تیره‌تر و همچنین لکه‌ها، کک و مک و نواحی تیره روی پوست را تولید می‌کند، اندازه‌گیری می‌کند. آیا پوست شما مستعد تولید رنگدانه است؟");
                setOptions(['بله', 'خیر', 'نمی دانم']);
                setValues(["none_dud_no_no_no_no_no_yes_dry_pigmented", "none_dud_no_no_no_no_no_yes_dry_nonpigmented", "unknown2"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_no_no_no_no_yes_oily") {
                setQuestion("این بخش توانایی بدن شما را برای تشکیل ملانین، رنگدانه‌ای که رنگ پوست تیره‌تر و همچنین لکه‌ها، کک و مک و نواحی تیره روی پوست را تولید می‌کند، اندازه‌گیری می‌کند. آیا پوست شما مستعد تولید رنگدانه است؟");
                setOptions(['بله', 'خیر', 'نمی دانم']);
                setValues(["none_dud_no_no_no_no_no_yes_oily_pigmented", "none_dud_no_no_no_no_no_yes_oily_nonpigmented", "unknown2"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_no_no_no_no_yes_oily_pigmented") {
                setQuestion("آیا پوست شما چین و چروک دارد یا کشیده است؟");
                setOptions(['چین و چروک دارد', 'کشیده است', "نمی دانم"]);
                setValues(["OSPW", "OSPT", "unknown3"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_no_no_no_no_yes_oily_nonpigmented") {
                setQuestion("آیا پوست شما چین و چروک دارد یا کشیده است؟");
                setOptions(['چین و چروک دارد', 'کشیده است', "نمی دانم"]);
                setValues(["OSNW", "OSNT", "unknown3"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_no_no_no_no_yes_dry_pigmented") {
                setQuestion("آیا پوست شما چین و چروک دارد یا کشیده است؟");
                setOptions(['چین و چروک دارد', 'کشیده است', "نمی دانم"]);
                setValues(["DSPW", "DSTP", "unknown3"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_no_no_no_no_yes_nonpigmented") {
                setQuestion("آیا پوست شما چین و چروک دارد یا کشیده است؟");
                setOptions(['چین و چروک دارد', 'کشیده است', "نمی دانم"]);
                setValues(["DSNW", "DSNT", "unknown3"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_no_no_no_no_no") {
                setQuestion("چند رگ خونی قرمز یا آبی زیرپوستی روی صورت و بینی خود دارید؟");
                setOptions(['مقداری، 4 تا 6 رگ در کل صورت، از جمله بینی', 'تعداد زیادی ( بیش از 7 رگ در کل صورت، از جمله بینی)', "هیچ", "تعداد کمی (1 تا 3 رگ در کل صورت، از جمله بینی)"]);
                setValues(["none_dud_no_no_no_no_no_no_yes", "none_dud_no_no_no_no_no_no_yes", "none_dud_no_no_no_no_no_no_no", "none_dud_no_no_no_no_no_no_no"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_no_no_no_no_no_yes") {
                setQuestion("آیا پوست شما چرب است یا خشک؟");
                setOptions(['چرب', 'خشک', "نمی‌دانم"]);
                setValues(["none_dud_no_no_no_no_no_no_yes_oily", "none_dud_no_no_no_no_no_no_yes_dry", "unknown1"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_no_no_no_no_no_yes_dry") {
                setQuestion("این بخش توانایی بدن شما را برای تشکیل ملانین، رنگدانه‌ای که رنگ پوست تیره‌تر و همچنین لکه‌ها، کک و مک و نواحی تیره روی پوست را تولید می‌کند، اندازه‌گیری می‌کند. آیا پوست شما مستعد تولید رنگدانه است؟");
                setOptions(['بله', 'خیر', 'نمی دانم']);
                setValues(["none_dud_no_no_no_no_no_no_yes_dry_pigmented", "none_dud_no_no_no_no_no_no_yes_dry_nonpigmented", "unknown2"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_no_no_no_no_no_yes_oily") {
                setQuestion("این بخش توانایی بدن شما را برای تشکیل ملانین، رنگدانه‌ای که رنگ پوست تیره‌تر و همچنین لکه‌ها، کک و مک و نواحی تیره روی پوست را تولید می‌کند، اندازه‌گیری می‌کند. آیا پوست شما مستعد تولید رنگدانه است؟");
                setOptions(['بله', 'خیر', 'نمی دانم']);
                setValues(["none_dud_no_no_no_no_no_no_yes_oily_pigmented", "none_dud_no_no_no_no_no_no_yes_oily_nonpigmented", "unknown2"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_no_no_no_no_no_yes_oily_pigmented") {
                setQuestion("آیا پوست شما چین و چروک دارد یا کشیده است؟");
                setOptions(['چین و چروک دارد', 'کشیده است', "نمی دانم"]);
                setValues(["OSPW", "OSPT", "unknown3"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_no_no_no_no_no_yes_oily_nonpigmented") {
                setQuestion("آیا پوست شما چین و چروک دارد یا کشیده است؟");
                setOptions(['چین و چروک دارد', 'کشیده است', "نمی دانم"]);
                setValues(["OSNW", "OSNT", "unknown3"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_no_no_no_no_no_yes_dry_pigmented") {
                setQuestion("آیا پوست شما چین و چروک دارد یا کشیده است؟");
                setOptions(['چین و چروک دارد', 'کشیده است', "نمی دانم"]);
                setValues(["DSPW", "DSTP", "unknown3"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_no_no_no_no_no_yes_nonpigmented") {
                setQuestion("آیا پوست شما چین و چروک دارد یا کشیده است؟");
                setOptions(['چین و چروک دارد', 'کشیده است', "نمی دانم"]);
                setValues(["DSNW", "DSNT", "unknown3"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_no_no_no_no_no_no") {
                setQuestion("اطرافیان از شما می‌پرسند که آیا دچار آفتاب سوختگی شده اید یا نه، حتی وقتی که نشدید:");
                setOptions(['هرگز', 'گاهی اوقات', "اغلب", "همیشه", "من همیشه دچارآفتاب سوختگی هستم"]);
                setValues(["none_dud_no_no_no_no_no_no_no_dud", "none_dud_no_no_no_no_no_no_no_dud", "none_dud_no_no_no_no_no_no_no_dud", "none_dud_no_no_no_no_no_no_no_dud", "none_dud_no_no_no_no_no_no_no_dud"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_no_no_no_no_no_no_dud") {
                setQuestion("آیا پوست شما چرب است یا خشک؟");
                setOptions(['چرب', 'خشک', "نمی‌دانم"]);
                setValues(["none_dud_no_no_no_no_no_no_no_dud_oily", "none_dud_no_no_no_no_no_no_no_dud_dry", "unknown1"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_no_no_no_no_no_no_dud_dry") {
                setQuestion("این بخش توانایی بدن شما را برای تشکیل ملانین، رنگدانه‌ای که رنگ پوست تیره‌تر و همچنین لکه‌ها، کک و مک و نواحی تیره روی پوست را تولید می‌کند، اندازه‌گیری می‌کند. آیا پوست شما مستعد تولید رنگدانه است؟");
                setOptions(['بله', 'خیر', 'نمی دانم']);
                setValues(["none_dud_no_no_no_no_no_no_no_dud_dry_pigmented", "none_dud_no_no_no_no_no_no_no_dud_dry_nonpigmented", "unknown2"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_no_no_no_no_no_no_dud_oily") {
                setQuestion("این بخش توانایی بدن شما را برای تشکیل ملانین، رنگدانه‌ای که رنگ پوست تیره‌تر و همچنین لکه‌ها، کک و مک و نواحی تیره روی پوست را تولید می‌کند، اندازه‌گیری می‌کند. آیا پوست شما مستعد تولید رنگدانه است؟");
                setOptions(['بله', 'خیر', 'نمی دانم']);
                setValues(["none_dud_no_no_no_no_no_no_no_dud_oily_pigmented", "none_dud_no_no_no_no_no_no_no_dud_oily_nonpigmented", "unknown2"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_no_no_no_no_no_no_dud_oily_pigmented") {
                setQuestion("آیا پوست شما چین و چروک دارد یا کشیده است؟");
                setOptions(['چین و چروک دارد', 'کشیده است', "نمی دانم"]);
                setValues(["OSPW", "OSPT", "unknown3"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_no_no_no_no_no_no_dud_oily_nonpigmented") {
                setQuestion("آیا پوست شما چین و چروک دارد یا کشیده است؟");
                setOptions(['چین و چروک دارد', 'کشیده است', "نمی دانم"]);
                setValues(["OSNW", "OSNT", "unknown3"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_no_no_no_no_no_no_dud_dry_pigmented") {
                setQuestion("آیا پوست شما چین و چروک دارد یا کشیده است؟");
                setOptions(['چین و چروک دارد', 'کشیده است', "نمی دانم"]);
                setValues(["DRPW", "DRTP", "unknown3"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "none_dud_no_no_no_no_no_no_no_dud_nonpigmented") {
                setQuestion("آیا پوست شما چین و چروک دارد یا کشیده است؟");
                setOptions(['چین و چروک دارد', 'کشیده است', "نمی دانم"]);
                setValues(["DRNW", "DRNT", "unknown3"]);
            }
            setCurrentQuestion(currentQuestion + 1);
        }
        if (selectedValue) {
            if (lastAnswer === "unknown_1") {
                setQuestion(unknownQuestions_1[unknownStep].text);
                setOptions(unknownQuestions_1[unknownStep].options)
                setUnknownScore(unknownQuestions_1[unknownStep].values[selectedValue] + unknownScore);
                setUnknownStep(unknownStep + 1);
                if (unknownStep === unknownQuestions_1.length - 1) {
                    setAnswers(prevAnswers => {
                        let newAnswers = [...prevAnswers];
                        newAnswers.pop();
                        return newAnswers;
                    });
                    if (unknownScore <= 18) {
                        setAnswers(prevAnswers => {
                            let newAnswers = [...prevAnswers]; // Create a copy of the previous state
                            newAnswers[newAnswers.length - 1] += "_dry"; // Add the string to the last element
                            return newAnswers; // Return the new state
                        });
                    } else {
                        setAnswers(prevAnswers => {
                            let newAnswers = [...prevAnswers]; // Create a copy of the previous state
                            newAnswers[newAnswers.length - 1] += "_oily"; // Add the string to the last element
                            return newAnswers; // Return the new state
                        });
                    }
                    setUnknownStep(0);
                    setUnknownScore(0);
                }
            }
        }
        if (selectedValue) {
            if (lastAnswer === "unknown2") {
                setQuestion(unknownQuestions_2[unknownStep].text);
                setOptions(unknownQuestions_2[unknownStep].options)
                setUnknownScore(unknownQuestions_2[unknownStep].values[selectedValue] + unknownScore);
                setUnknownStep(unknownStep + 1);
                console.log(unknownStep);
                console.log(unknownQuestions_2.length - 1);
                if (unknownStep === unknownQuestions_2.length - 1) {
                    setAnswers(prevAnswers => {
                        let newAnswers = [...prevAnswers];
                        newAnswers.pop();
                        return newAnswers;
                    });
                    if (unknownScore <= 23) {
                        setAnswers(prevAnswers => {
                            let newAnswers = [...prevAnswers]; // Create a copy of the previous state
                            newAnswers[newAnswers.length - 1] += "_pigmented"; // Add the string to the last element
                            return newAnswers; // Return the new state
                        });
                    } else {
                        setAnswers(prevAnswers => {
                            let newAnswers = [...prevAnswers]; // Create a copy of the previous state
                            newAnswers[newAnswers.length - 1] += "_nonpigmented"; // Add the string to the last element
                            return newAnswers; // Return the new state
                        });
                    }
                    setUnknownStep(0);
                    setUnknownScore(0);
                }
            }
        }
        if (selectedValue) {
            if (lastAnswer === "unknown3") {
                setQuestion(unknownQuestions_3[unknownStep].text);
                setOptions(unknownQuestions_3[unknownStep].options)
                setUnknownScore(unknownQuestions_3[unknownStep].values[selectedValue] + unknownScore);
                setUnknownStep(unknownStep + 1);
                if (unknownStep === unknownQuestions_3.length - 1) {
                    setAnswers(prevAnswers => {
                        let newAnswers = [...prevAnswers];
                        newAnswers.pop();
                        return newAnswers;
                    });
                    if (unknownScore <= 23) {
                        setAnswers(["ORNT"]);
                        setFinished(true);
                    } else {
                        setAnswers(["ORNW"]);
                        setFinished(true);
                    }
                    setUnknownStep(0);
                    setUnknownScore(0);
                }
            }
        }

    }, [answers]);

    const handleNext = () => {
        if (!selectedValue) {
            alert("حداقل یک گزینه را انتخاب کنید")
        } else {
            handleAnswer(values[selectedValue]);
        }

    };

    const handlePrev = () => {
        setCurrentQuestion(currentQuestion - 1);
        answers.pop();
    };
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div style={{
            padding: '2rem',
            height: '90%',
        }}>
            <progress style={{
                width: '100%',
                height: '.5rem',
            }} value={currentQuestion} max={questions.length}></progress>
            {!finished ? (
                <Box display="flex" flexDirection="column" height="90%" justifyContent="space-between" >
                    <div style={{
                        overflow: 'auto',
                        margin: '3rem 0',
                    }} >
                        <p style={{
                            fontSize: '1.2rem',
                            textAlign: 'justify',
                            fontWeight: 'bold',
                            marginBottom: '1rem',
                        }}>{question}</p>
                        <FormControl component="fieldset" style={{ width: "100%" }}>
                            <RadioGroup
                                value={selectedValue}
                                onChange={handleChange}
                                style={{ display: 'grid', justifyContent: 'center', listStyle: 'none', width: "100%" }}
                            >
                                {options.map((option, index) => (
                                    <>
                                        <FormControlLabel value={index} control={<Radio />} label={option} />

                                        <hr style={{
                                            height: '1px',
                                            width: '100%',
                                            border: "none",
                                            background: 'linear-gradient(to right, transparent, black, transparent)',
                                        }} />
                                    </>
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: "row-reverse"
                    }}>
                        <button onClick={handleNext}
                            style={currentQuestion > 0 ? {
                                borderRadius: '10px 0px 0px 10px',
                                backgroundColor: 'transparent',
                                padding: '0.5rem',
                                fontSize: '1rem',
                                border: 'none',
                                cursor: 'pointer',
                            } : {
                                borderRadius: '10px 10px 10px 10px',
                                backgroundColor: 'transparent',
                                padding: '0.5rem',
                                fontSize: '1rem',
                                border: 'none',
                                cursor: 'pointer',
                            }}
                        >مرحله بعد
                            <ArrowBack style={{ position: "relative", top: 8 }} />
                        </button>


                    </div>
                </Box >
            ) : (
                <div>

                    <p style={{
                        fontSize: '1.2rem',
                        textAlign: 'justify',
                        fontWeight: 'bold',
                        marginBottom: '1rem',
                    }}>
                        {answers[answers.length - 1]}
                    </p>
                    <Button component={Link} to="/analyze" type='button' variant='contained' style={{ margin: "20px auto 80px" }}>بازگشت</Button>
                </div>
            )}
        </div >
    );
};

export default SkinQuiz;

