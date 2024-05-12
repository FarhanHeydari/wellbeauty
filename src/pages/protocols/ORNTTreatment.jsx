import React, { useState } from 'react';
import { SimpleNav } from '../../component/SimpleNav';
import { Typography, Button, Box, Tabs, Tab } from '@mui/material';

const ORNTTreatment = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: 'ORNT Treatment',
                text: 'Check out this ORNT treatment!',
                url: window.location.href,
            })
                .catch((error) => console.log('Error sharing', error));
        } else {
            console.log('Web Share not supported on this browser');
        }
    };
    return (
        <>
            <SimpleNav prevLocation={"/analyze/protocols/ornt"}>Treatment</SimpleNav>
            <Typography variant="h5" sx={{ color: '#704798', fontWeight: "bold", textAlign: "center", paddingTop: 2 }}>ORNT</Typography>
            <Typography variant="body1" sx={{ fontWeight: "bold", textAlign: "center", paddingBottom: 2 }}>Oily, Resistant, Non-Pigmented, & Tight</Typography>
            <Box display="flex" justifyContent="center">
                <Button variant='outlined' onClick={handleShare} fullWidth sx={{ maxWidth: 350, }} >
                    اشتراک گزاری
                </Button>
            </Box>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="کلینیک" />
                <Tab label="خانه" />
            </Tabs>
            {value === 0 && <Box p={3}>
                <p>&nbsp;</p>
                <p>فوم C-Purity یک فرمول پاک&zwnj;کننده عمیق، چربی&zwnj;های اضافی را از بین می&zwnj;برد و ناخالصی&zwnj;های سطحی را برای پوستی تمیز، نرم و لطیف پاک می&zwnj;کند. محصول حاوی SLS نیست.</p>
                <p>عناصر فعال</p>
                <ul>
                    <li>آسکوربیل تترا ایزوپالمیتات: یک مشتق ویتامین C محلول در روغن. به عنوان یک آنتی اکسیدان و عامل سفید کننده قوی، با قابلیت ضد آکنه و ضد پیری عمل می کند.</li>
                    <li>بابونه مقطر: عصاره گل بابونه که از طریق تقطیر تولید می شود. یک هیدروسول تسکین دهنده ملایم است که برای طراوت و آرامش پوست استفاده می شود.</li>
                </ul>
                <p>Pre-peel conditioner</p>
                <p>آماده سازی پوست برای لایه برداری، پرکننده و لیزر درمانی. نرم کننده پیش لایه برداری برای آماده سازی پوست برای هر گونه درمان مانند لایه برداری، فیلر و لیزر استفاده می شود.</p>
                <p>با چربی زدایی پوست، پوست را برای درمان های لایه برداری آماده می کند و به پخش و نفوذ یکنواخت عوامل لایه بردار کمک می کند. نرم کننده پیش لایه برداری حاوی ماده ضد تحریک ShieldSkin است.</p>
                <h3>GlyPeel 50 نانو: تا 12 دقیقه &ndash; شستشو ندهید &ndash; برای Fitzpatrick 4-6: تا 7 دقیقه &ndash; شستشو ندهید</h3>
                <p>ژل تیکسوتروپیک نانوساختار ۵۰% اسید گلیکولیک با ShieldSkin فقط برای استفاده حرفه ای در کلینیک است.</p>
                <p>pH&lt;1</p>
                <p>ژل تیکسوتروپیک نانوساختار GlyPeel 50 خطوط ریز، چین و چروک، آسیب های ناشی از نور خورشید و لک پوستی را کاهش می دهد. این به کاهش بافت ناهموار پوست در پوست&zwnj;های دارای اختلال و چرب کمک می کند، اپی&zwnj;درم و درم را تحت تاثیر قرار می دهد، همگرایی کورنئوسیت&zwnj;های اپی&zwnj;درمی را کاهش می دهد و از ضخیم شدن لایه کورنئال جلوگیری می کند. ژل تیکسوتروپیک نانوساختار GlyPeel 50 باعث لایه برداری بیشتر پوست و تحریک سنتز کلاژن، الاستین و گلیکوزامینوگلیکان پوست می شود.</p>
                <p>فرمول ژل تیکسوتروپیک نانوساختار GlyPeel 50 حاوی ۵۰٪ اسید گلیکولیک و ضد تحریک ShieldSkin است. فرمول لایه برداری شامل ماتریکس معدنی نانوساختار است که یک ژل تیکسوتروپیک ایجاد می کند. استفاده از مواد نانوساختار به طور قابل توجهی اثر لایه برداری را افزایش می دهد و امکان استفاده از غلظت های پایین تر از عامل لایه برداری را فراهم می کند.</p>
                <p>عناصر فعال</p>
                <p>اسید گلیکولیک 50%</p>
                <p>احتیاط</p>
                <p>فقط برای استفاده توسط متخصصان. این محصول فقط توسط پزشکان، متخصصین پوست، جراحان پلاستیک یا زیبایی، پرستاران دارای گواهینامه در بخش&zwnj;های پزشکی، زیبایی&zwnj;شناسان مجاز و متخصصین زیبایی قابل استفاده است. قبل از اعمال، راهنمای همراه ژل تیکسوتروپیک نانوساختار GlyPeel 50 را مطالعه کنید. پس از استفاده از این محصول از قرار گرفتن در معرض نور خورشید خودداری کنید.</p>
                <p>خنثی&zwnj;کننده لایه بردار</p>
                <p>محلول واکنش سریع، طراوت&zwnj;بخش و تسکین&zwnj;دهنده برای خنثی کردن اسیدهای باقی مانده</p>
                <p>خنثی کننده لایه&zwnj;بردار یک محلول واکنش سریع، طراوت&zwnj;بخش و تسکین&zwnj;دهنده است که برای خنثی کردن اسیدهای باقیمانده که ممکن است پس از استفاده از لایه برداری شیمیایی روی پوست باقی بماند، استفاده می شود. این محصول اجازه می دهد تا عمق لایه برداری را کنترل کنید و اطمینان حاصل کنید که اسید روی پوست پس از اتمام درمان خنثی می&zwnj;شود. خنثی کننده لایه برداری حاوی ShieldSkin ضد تحریک است.</p>
                <h3>شستشو</h3>
                <h3>کمپلکس پپتیدی لیفت و سفید کننده (توصیه می شود از آمپول کامل با دستگاه الکتروپوریشن استفاده شود) یا 3/1 از آمپول کمپلکس پپتیدی لیفت و سفیدکننده به همراه مخلوط ترموژل (2/1) + CoolRelief (2/1) &ndash; ماساژ به مدت 10 دقیقه و سپس شستشو</h3>
                <p>کمپلکس پپتیدی لیفت و سفید کننده یک ترکیب موثر و بسیار غلیظ از پپتیدها است که برای دستیابی به اثر قابل توجهی در ثبات و سفیدی پوست استفاده می شود.</p>
                <p>- مسیرهای بازسازی متعدد در درم را فعال می کند.</p>
                <p>- عمق چین و چروک را به میزان قابل توجهی کاهش می دهد.</p>
                <p>- سطح رطوبت و تورم پوست را بهبود می بخشد.</p>
                <p>- سطح تغذیه و خاصیت ارتجاعی پوست را افزایش می دهد.</p>
                <p>- اثر سفید کنندگی پوست را فراهم می کند.</p>
                <p>عناصر فعال</p>
                <ul>
                    <li>Palmitoyl Tripeptide-38 (Matrixyl Synthe'6TM): این فرمول حاوی غلظت بسیار بالایی از Matrixyl Synthe'6 است و یک تقویت کننده سفت کننده پوست در نظر گرفته می شود. این فرمول یک پپتید تقلیدی ماتریکین است که با سنتز ۶ جزء ساختاری اصلی درم، باعث تسریع روند پر کردن چین و چروک می&zwnj;شود. مواد سازنده را با تحریک سنتز شش مولکول اصلی - اسید هیالورونیک، کلاژن I، III و IV، لامینین ها و فیبرونکتین فراهم می&zwnj;کند و به طور قابل توجهی پوست را سفت می&zwnj;کند و چین و چروک ها را پر می&zwnj;کند.</li>
                    <li>سیکلوتتراپپتید-۲۴ آمینو سیکلوهگزان کربوکسیلات: یک ساختار حلقوی منحصر به فرد که با چین و چروک و خطوط ریز مقابله می&zwnj;کند. طراحی منحصر به فرد آن به عنوان یک پپتید هوشمند و انتخابی، فرآیندهای طبیعی ارتباط و ترمیم پوست را تقلید می کند.</li>
                    <li>اُلیگوپپتید-68: عامل سفید کننده نوآورانه و منحصر به فرد که ظاهر لکه های تیره و تغییر رنگ پوست را ناپیداتر می&zwnj;کند.</li>
                    <li>عصاره Swertia Chirata: یک ماده تشکیل شده از برگ&zwnj;های جنتیان هندی است. این عصاره سلول های بنیادی مشتق شده از چربی را فعال کرده، تولید فاکتورهای رشد کراتینوسیت را تقویت می&zwnj;کند و قادر به تحریک تکثیر کراتینوسیت&zwnj;ها برای بازسازی اپیدرم نازک و بهبود ظاهر پوست چروکیده است. همچنین باعث بهبود ظاهر چین و چروک&zwnj;های عمودی و کاهش چین و چروک&zwnj;های لب می&zwnj;شود.</li>
                    <li>هیالورونات سدیم: اسید هیالورونیک با وزن مولکولی بالا با خلوص بسیار بالا که آبرسانی عمیق را فراهم می کند. خاصیت رطوبت سنجی قوی هیالورونات سدیم باعث حفظ آب در سطح پوست می شود و نقش مخزن آب را ایفا می کند.</li>
                    <li>سدیم PCA: یک جزء طبیعی NMF (عامل مرطوب کننده طبیعی). سدیم PCA بسیار جاذب آب است و می&zwnj;تواند چندین برابر وزن خود را در آب نگه دارد، بنابراین به کاهش از دست دادن رطوبت از طریق تبخیر (از دست دادن آب ترانس اپیدرمی) کمک می&zwnj;کند.</li>
                </ul>
                <h3>KeratPeel (یک لایه) - شستشو ندهید</h3>
                <p>سالیسیلیک اسید یک اسید بتا هیدروکسی محلول در روغن است. دارای اثرات کراتولیتیک برای شکستن کراتین و اثرات کودولیتیک برای جلوگیری از مسدود شدن منافذ است.</p>
                <p>اسید سالیسیلیک را می توان با سایر لایه بردارها ترکیب کرد و برای درمان آکنه التهابی و علائم پس از آکنه استفاده کرد. ماهیت چربی دوست به آن اجازه می&zwnj;دهد تا به غدد چربی نفوذ کند.</p>
                <h3>PuriMask &ndash; 15 دقیقه</h3>
                <p>PuriMask یک ماسک تصفیه کننده برای درمان پوست&zwnj;های دارای اختلال و چرب است. PuriMask ضد عفونی می کند، قرمزی پوست را تسکین می دهد، با جوش زدن مبارزه می&zwnj;کند و تکثیر باکتری ها را کاهش می دهد.</p>
                <h4>عناصر فعال</h4>
                <p>اولئانولیک اسید: یک مهارکننده قوی فرآیندهای التهابی سلولی و محافظ اصلی سلول ها در برابر استرس اکسیداتیو است. ۵-&alpha;ردوکتاز برای مبارزه با هایپرسبوریا و کاهش تأثیر تستوسترون بر روی پوست مستعد آکنه.</p>
                <ul>
                    <li>Nordihydroguaiaretic Acid (NDGA) یک تنظیم&zwnj;کننده رشد سلولی است که هایپرکراتوز و التهاب را مهار می&zwnj;کند. همچنین به کنترل رشد باکتری کمک می&zwnj;کند.</li>
                    <li>عصاره بره موم: به دلیل خواص ضد باکتریایی و ضد التهابی که دارد روند بهبود زخم را تسریع می کند.</li>
                    <li>عصاره مریم گلی دارویی: از بروز عفونت های پوستی جلوگیری می کند.</li>
                    <li>آلانتوئین: عیوب را التیام می بخشد.</li>
                    <li>روغن برگ اکالیپتوس: عفونت های پوستی را درمان می&zwnj;کند.</li>
                    <li>گوگرد: باکتری ها و چربی را از بین می&zwnj;برد که به نوبه خود باعث کاهش افزایش منافذ پوستی می&zwnj;شود.</li>
                </ul>
                <h3>LumiLac</h3>
                <p>LumiLac به طور منحصر به فرد جوانسازی پوست را تسریع می&zwnj;کند و بافت را اصلاح می&zwnj;کند و در عین حال رنگ پوست و آبرسانی را بهبود می&zwnj;بخشد. اسید لاکتیک ۱۰ درصد با ShieldSkin به همه انواع پوست اجازه می&zwnj;دهد تا از این کرم AHA در تمام طول سال بدون مشکل استفاده کنند. این کرم بافتی سبک و بدون چربی دارد که به سرعت جذب پوست می&zwnj;شود و برای انواع پوست مناسب است.</p>
                <p>فواید:</p>
                <p>- ظاهر چین و چروک و خطوط ریز را کاهش می&zwnj;دهد.</p>
                <p>- باعث جابجایی سلولی و لایه برداری می&zwnj;شود.</p>
                <p>- آسیب ناشی از نور خورشید را ترمیم می&zwnj;کند و از ایجاد توده جلوگیری می&zwnj;کند.</p>
                <p>- تراکم و خاصیت ارتجاعی پوست را بهبود می&zwnj;بخشد.</p>
                <p>- به کاهش تغییر رنگ و هایپرپیگمانتاسیون کمک می&zwnj;کند.</p>
                <p>- برای استفاده در اطراف ناحیه ظریف چشم بی&zwnj;خطر است.</p>
                <p>- تداخلی با سایر داروهای آرایشی یا پزشکی ندارد.</p>
                <p>&nbsp;</p>
                <h3>PolarMist</h3>
                <p>PolarMist با ترکیبی از عوامل تسکین&zwnj;دهنده قوی، توانایی&zwnj;های آرام&zwnj;بخش و ضد التهابی را فراهم می&zwnj;کند. برای استفاده در روز و شب به عنوان یک مرطوب کننده با استاندارد بالا مناسب است و برای پوست&zwnj;های حساس یا تحریک شده ایده&zwnj;آل است. این کرم بر اساس یک فناوری خنک کننده پیشرفته، اثر تسکین دهنده و خنک کننده ایجاد می&zwnj;کند و در حالی که پوست را مرطوب و آرام می&zwnj;کند، خاصیت ارتجاعی و استحکام را بهبود می&zwnj;بخشد و ظهور علائم پیری را به تاخیر می&zwnj;اندازد. PolarMist همچنین برای حمایت و مرطوب کردن پوست&zwnj;های دارای اختلال عالی است. این محصول برای تمام گروه&zwnj;های سنی مناسب است.</p>
                <h4>عناصر فعال</h4>
                <p>عصاره جو دوسر: جو دو سر می&zwnj;تواند پوست را تسکین دهد و صاف و تغذیه کند. عصاره جو دو سر برای انواع پوست و به خصوص برای پوست&zwnj;های حساس و پوست های خشک و پوسته پوسته شده توصیه می&zwnj;شود.</p>
                <p>پالمیتول تتراپپتید ۷: یک پپتید موثر که با تنظیم ترشح پایه IL-6 (اینترلوکین-۶) -سیتوکینی که بر التهاب تأثیر می&zwnj;گذارد- رشد سلولی، فعال شدن ژن و تکثیر را تنظیم می&zwnj;کند و باعث می&zwnj;شود پوست در برابر نور خورشید، آلودگی و محرک&zwnj;های شیمیایی تحمل بالاتری داشته باشد. بقای IL-6 با پیری طبیعی و پیری ناشی از اشعه ماوراء بنفش مرتبط است. بنابراین پالمیتول تتراپپتید ۷ نیز از پوست در برابر پیری زودرس محافظت می&zwnj;کند و اثرات آن را کاهش می&zwnj;دهد.</p>
                <p>هیالورونات سدیم: اسید هیالورونیک با خلوص بسیار بالا که آبرسانی عمیق را فراهم می&zwnj;کند. خواص رطوبت&zwnj;گیر قوی هیالورونات سدیم باعث حفظ آب می شود و نقش مخزن آب را ایفا می کند.</p>
                <p>MET &amp; Menthyl PCA &amp; Lactamide MEA: ترکیبی از مواد خنک&zwnj;کننده که گیرنده&zwnj;های TRMP8را فعال می&zwnj;کند و با یک پالس عصبی احساس خنکی را القا می&zwnj;کند.</p>
                <h3>SunShield برای پوست&zwnj;های دارای اختلال و چرب</h3>
                <p>پودر معدنی ضد آفتاب با طیف وسیع فرموله شده برای پاسخگویی به نیازهای پوست&zwnj;های دارای اختلال و چرب که برای استفاده روزمره طراحی شده است، پودر معدنی SunShield SPF 50 محافظت فوری و بهینه را در برابر اشعه های مضر UVA، UVB و IR ارائه می&zwnj;کند. این پودر با خواص ضد التهابی خود، راه حل ایده آلی برای محافظت در برابر آفتاب برای پوست&zwnj;های دارای اختلال و چرب است. همچنین به جلوگیری از آسیب&zwnj;های ناشی از نور خورشید مانند پیری و اختلالات رنگدانه&zwnj;ای کمک می&zwnj;کند.</p>
                <h4>مزایای SunShield:</h4>
                <ul>
                    <li>از اشعه های مضر UVA/UVB/IR و رادیکال های آزاد محافظت می&zwnj;کند.</li>
                    <li>خاصیت ضد التهابی ارائه می&zwnj;دهد.</li>
                    <li>به جلوگیری از آسیب های ناشی از نور خورشید، از جمله پیری و اختلالات رنگدانه&zwnj;ای کمک می&zwnj;کند.</li>
                    <li>بسته بندی با کاربری آسان امکان کنترل مقدار پودر را در حین استفاده فراهم می&zwnj;کند.</li>
                    <li>بسته بندی سازگار با محیط زیست - برس و ظرف پودر قابل تعویض</li>
                    <li>موجود در دو رنگ متفاوت</li>
                    <li>غیر حساس به گرما</li>
                    <li>پوشش مات، پوشش بدون درز، اثر بازتابی</li>
                </ul>


            </Box>}
            {value === 1 && <Box p={3}>
                <p><strong>صبح</strong></p>
                <p>C-Purity foam</p>
                <h3>IntenseGel</h3>
                <p>IntenseGel یک امولسیون تعدیل کننده با ۱۰٪ اسید لاکتیک (AHA)، ۲٪ اسید سالیسیلیک (BHA) و ShieldSkin است. پوست&zwnj;های چرب و مختلط را بدون ایجاد حساسیت به دلیل ShieldSkin بهبود می&zwnj;بخشد. ترکیب AHA-BHA دارای خواص ضد میکروبی و ضد التهابی برای شفاف&zwnj;سازی و تسکین&zwnj;دهنده پوست چرب است.</p>
                <p>این فرمول حاوی ۱۰۰٪ اسید سالیسیلیک طبیعی، یک لایه بردار سازگار با محیط زیست BHA است. اسید سالیسیلیک روغن ها را متعادل می کند، منافذ را پاک می کند و اثرات ضد باکتریایی دارد. این ماده خالص و طبیعی ارتقا یافته، لایه برداری و مزایای شفاف سازی را برای انواع پوست های چرب فراهم می کند.</p>
                <h4>مزایای IntenseGel:</h4>
                <p>- جوان کننده، روشن کننده و صاف کننده بافت پوست است.</p>
                <p>- چربی را کاهش می&zwnj;دهد و آبرسانی ایده&zwnj;آل را فراهم می&zwnj;کند.</p>
                <p>- پوست را پاکسازی و لک&zwnj;ها را بهبود می&zwnj;بخشد.</p>
                <p>- چهره&zwnj;ای روشن، صاف و درخشان ایجاد می&zwnj;کند.</p>
                <p>- با سایر داروهای آرایشی یا پزشکی به خوبی کار می&zwnj;کند.</p>
                <p>محلول AcNetrol</p>
                <p>محلول AcNetrol یک ترکیب غلیظ و موثر است که با کاهش میزان باکتری&zwnj;های بیماری&zwnj;زا، تولید سبوم و التهاب (قرمزی و تحریک) برای درمان پوست&zwnj;های دارای اختلال و تحریک شده استفاده می&zwnj;شود.</p>
                <p>عناصر فعال</p>
                <p>نیاسینامید 4%: یک پرو ویتامین که به طور قابل توجهی ترشح سبوم را کاهش می&zwnj;دهد. دارای خواص ضد التهابی و آنتی باکتریال قوی است که می&zwnj;تواند یک گزینه درمانی مناسب بدون خطر مقاومت باکتریایی یا عوارض جانبی ارائه دهد.</p>
                <p>امولسیون پرفلوئوروکربن ۳۰%: یک حامل که اکسیژن را به بافت&zwnj;ها برده و آزاد می&zwnj;کند. باکتری&zwnj;های بی&zwnj;هوازی مانند P.acne در پوست با شرایط کم اکسیژن مانند منافذ مسدود شده تکثیر می شوند. ایجاد یک محیط اکسیژن دار برای مبارزه با آکنه که یک باکتری بی&zwnj;هوازی است، ایده&zwnj;آل است.</p>
                <p>اُلیگوپپتید 10: یک پپتید ضد میکروبی ثبت شده که فعالیت عالی در برابر باکتری P.acne از خود نشان می&zwnj;دهد و می&zwnj;تواند جایگزین آنتی بیوتیک&zwnj;ها در درمان طولانی مدت آکنه شود.</p>
                <p>عصاره جو دوسر: با کاهش سطح سایتوکین&zwnj;های التهابی -که مواد شیمیایی سیستم ایمنی هستند- با التهاب مبارزه می&zwnj;کند.</p>
                <p>&nbsp;</p>
                <h3>PolarMist</h3>
                <p>PolarMist با ترکیبی از عوامل تسکین&zwnj;دهنده قوی، توانایی&zwnj;های آرام&zwnj;بخش و ضد التهابی را فراهم می&zwnj;کند. برای استفاده در روز و شب به عنوان یک مرطوب کننده با استاندارد بالا مناسب است و برای پوست&zwnj;های حساس یا تحریک شده ایده&zwnj;آل است. این کرم بر اساس یک فناوری خنک کننده پیشرفته، اثر تسکین دهنده و خنک کننده ایجاد می&zwnj;کند و در حالی که پوست را مرطوب و آرام می&zwnj;کند، خاصیت ارتجاعی و استحکام را بهبود می&zwnj;بخشد و ظهور علائم پیری را به تاخیر می&zwnj;اندازد. PolarMist همچنین برای حمایت و مرطوب کردن پوست&zwnj;های دارای اختلال عالی است. این محصول برای تمام گروه&zwnj;های سنی مناسب است.</p>
                <h4>عناصر فعال</h4>
                <p>عصاره جو دوسر: جو دو سر می&zwnj;تواند پوست را تسکین دهد و صاف و تغذیه کند. عصاره جو دو سر برای انواع پوست و به خصوص برای پوست&zwnj;های حساس و پوست های خشک و پوسته پوسته شده توصیه می&zwnj;شود.</p>
                <p>پالمیتول تتراپپتید ۷: یک پپتید موثر که با تنظیم ترشح پایه IL-6 (اینترلوکین-۶) -سیتوکینی که بر التهاب تأثیر می&zwnj;گذارد- رشد سلولی، فعال شدن ژن و تکثیر را تنظیم می&zwnj;کند و باعث می&zwnj;شود پوست در برابر نور خورشید، آلودگی و محرک&zwnj;های شیمیایی تحمل بالاتری داشته باشد. بقای IL-6 با پیری طبیعی و پیری ناشی از اشعه ماوراء بنفش مرتبط است. بنابراین پالمیتول تتراپپتید ۷ نیز از پوست در برابر پیری زودرس محافظت می&zwnj;کند و اثرات آن را کاهش می&zwnj;دهد.</p>
                <p>هیالورونات سدیم: اسید هیالورونیک با خلوص بسیار بالا که آبرسانی عمیق را فراهم می&zwnj;کند. خواص رطوبت&zwnj;گیر قوی هیالورونات سدیم باعث حفظ آب می شود و نقش مخزن آب را ایفا می کند.</p>
                <p>MET &amp; Menthyl PCA &amp; Lactamide MEA: ترکیبی از مواد خنک&zwnj;کننده که گیرنده&zwnj;های TRMP8را فعال می&zwnj;کند و با یک پالس عصبی احساس خنکی را القا می&zwnj;کند.</p>
                <h3>SunShield برای پوست&zwnj;های دارای اختلال و چرب (در طول روز با هر بار قرار گرفتن در معرض نور خورشید)</h3>
                <p>پودر معدنی ضد آفتاب با طیف وسیع فرموله شده برای پاسخگویی به نیازهای پوست&zwnj;های دارای اختلال و چرب که برای استفاده روزمره طراحی شده است، پودر معدنی SunShield SPF 50 محافظت فوری و بهینه را در برابر اشعه های مضر UVA، UVB و IR ارائه می&zwnj;کند. این پودر با خواص ضد التهابی خود، راه حل ایده آلی برای محافظت در برابر آفتاب برای پوست&zwnj;های دارای اختلال و چرب است. همچنین به جلوگیری از آسیب&zwnj;های ناشی از نور خورشید مانند پیری و اختلالات رنگدانه&zwnj;ای کمک می&zwnj;کند.</p>
                <h4>مزایای SunShield:</h4>
                <ul>
                    <li>از اشعه های مضر UVA/UVB/IR و رادیکال های آزاد محافظت می&zwnj;کند.</li>
                    <li>خاصیت ضد التهابی ارائه می&zwnj;دهد.</li>
                    <li>به جلوگیری از آسیب های ناشی از نور خورشید، از جمله پیری و اختلالات رنگدانه&zwnj;ای کمک می&zwnj;کند.</li>
                    <li>بسته بندی با کاربری آسان امکان کنترل مقدار پودر را در حین استفاده فراهم می&zwnj;کند.</li>
                    <li>بسته بندی سازگار با محیط زیست - برس و ظرف پودر قابل تعویض</li>
                    <li>موجود در دو رنگ متفاوت</li>
                    <li>غیر حساس به گرما</li>
                    <li>پوشش مات، پوشش بدون درز، اثر بازتابی</li>
                </ul>
                <p><strong>عصر</strong></p>
                <p>C-Purity foam</p>
                <h3>IntenseGel</h3>
                <h3>محلول AcNo</h3>
                <h3>PolarMist</h3>
                <p>&nbsp;</p>
                <p><strong>هفتگی</strong></p>
                <p>PuriMask یک بار در هفته</p>
                <p>PuriMask یک ماسک تصفیه کننده برای درمان پوست&zwnj;های دارای اختلال و چرب است. PuriMask ضد عفونی می کند، قرمزی پوست را تسکین می دهد، با جوش زدن مبارزه می&zwnj;کند و تکثیر باکتری ها را کاهش می دهد.</p>
                <h4>عناصر فعال</h4>
                <p>اولئانولیک اسید: یک مهارکننده قوی فرآیندهای التهابی سلولی و محافظ اصلی سلول ها در برابر استرس اکسیداتیو است. ۵-&alpha;ردوکتاز برای مبارزه با هایپرسبوریا و کاهش تأثیر تستوسترون بر روی پوست مستعد آکنه.</p>
                <ul>
                    <li>Nordihydroguaiaretic Acid (NDGA) یک تنظیم&zwnj;کننده رشد سلولی است که هایپرکراتوز و التهاب را مهار می&zwnj;کند. همچنین به کنترل رشد باکتری کمک می&zwnj;کند.</li>
                    <li>عصاره بره موم: به دلیل خواص ضد باکتریایی و ضد التهابی که دارد روند بهبود زخم را تسریع می کند.</li>
                    <li>عصاره مریم گلی دارویی: از بروز عفونت های پوستی جلوگیری می کند.</li>
                    <li>آلانتوئین: عیوب را التیام می بخشد.</li>
                    <li>روغن برگ اکالیپتوس: عفونت های پوستی را درمان می&zwnj;کند.</li>
                    <li>گوگرد: باکتری ها و چربی را از بین می&zwnj;برد که به نوبه خود باعث کاهش افزایش منافذ پوستی می&zwnj;شود.</li>
                </ul>
                <h3>SunShield برای پوست&zwnj;های دارای اختلال و چرب (در طول روز با هر بار قرار گرفتن در معرض نور خورشید)</h3>
                <p>پودر معدنی ضد آفتاب با طیف وسیع فرموله شده برای پاسخگویی به نیازهای پوست&zwnj;های دارای اختلال و چرب که برای استفاده روزمره طراحی شده است، پودر معدنی SunShield SPF 50 محافظت فوری و بهینه را در برابر اشعه های مضر UVA، UVB و IR ارائه می&zwnj;کند. این پودر با خواص ضد التهابی خود، راه حل ایده آلی برای محافظت در برابر آفتاب برای پوست&zwnj;های دارای اختلال و چرب است. همچنین به جلوگیری از آسیب&zwnj;های ناشی از نور خورشید مانند پیری و اختلالات رنگدانه&zwnj;ای کمک می&zwnj;کند.</p>
                <h4>مزایای SunShield:</h4>
                <ul>
                    <li>از اشعه های مضر UVA/UVB/IR و رادیکال های آزاد محافظت می&zwnj;کند.</li>
                    <li>خاصیت ضد التهابی ارائه می&zwnj;دهد.</li>
                    <li>به جلوگیری از آسیب های ناشی از نور خورشید، از جمله پیری و اختلالات رنگدانه&zwnj;ای کمک می&zwnj;کند.</li>
                    <li>بسته بندی با کاربری آسان امکان کنترل مقدار پودر را در حین استفاده فراهم می&zwnj;کند.</li>
                    <li>بسته بندی سازگار با محیط زیست - برس و ظرف پودر قابل تعویض</li>
                    <li>موجود در دو رنگ متفاوت</li>
                    <li>غیر حساس به گرما</li>
                    <li>پوشش مات، پوشش بدون درز، اثر بازتابی</li>
                </ul>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
            </Box>}
        </>
    );
};

export default ORNTTreatment;