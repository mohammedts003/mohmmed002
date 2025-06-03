// تنفيذ شريط التنقل المتجاوب
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    // تبديل القائمة
    burger.addEventListener('click', () => {
        // تبديل ظهور القائمة
        nav.classList.toggle('nav-active');
        
        // تحريك الروابط
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        // تحريك زر القائمة
        burger.classList.toggle('toggle');
    });
}

// التحقق من صحة نموذج الاتصال
const validateForm = () => {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (name === '' || email === '' || message === '') {
                showMessage('error', 'يرجى ملء جميع الحقول المطلوبة');
                return false;
            }
            
            if (!isValidEmail(email)) {
                showMessage('error', 'يرجى إدخال بريد إلكتروني صحيح');
                return false;
            }
            
            showMessage('success', 'تم إرسال الرسالة بنجاح!');
            contactForm.reset();
            return true;
        });
    }
}

// التحقق من صحة البريد الإلكتروني
const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// عرض رسائل النجاح والخطأ
const showMessage = (type, text) => {
    const messageBox = document.getElementById('message-box');
    
    if (messageBox) {
        messageBox.textContent = text;
        messageBox.style.display = 'block';
        
        if (type === 'success') {
            messageBox.className = 'message-box success-message';
        } else {
            messageBox.className = 'message-box error-message';
        }
        
        // إخفاء الرسالة بعد 3 ثوانٍ
        setTimeout(() => {
            messageBox.style.display = 'none';
        }, 3000);
    }
}

// تأثير التمرير السلس للروابط
const smoothScroll = () => {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// تحميل المقال في صفحة المقال
const loadPost = () => {
    const postContent = document.getElementById('post-content');
    
    if (postContent) {
        // الحصول على معرف المقال من عنوان URL
        const urlParams = new URLSearchParams(window.location.search);
        const postId = urlParams.get('id');
        
        // محتوى المقالات
        const posts = {
            '1': {
                title: 'أساسيات HTML',
                date: '28 مايو 2025',
                content: `
                    <p>HTML هي لغة ترميز تستخدم لإنشاء وتصميم صفحات ومواقع الويب. تعتبر HTML اللبنات الأساسية لأي موقع ويب، حيث تحدد هيكل المحتوى على الصفحة من خلال العناصر والوسوم.</p>
                    
                    <h2>تاريخ HTML</h2>
                    <p>تم تطوير HTML في عام 1990 من قبل تيم بيرنرز لي، وهو عالم كمبيوتر بريطاني كان يعمل في المنظمة الأوروبية للأبحاث النووية (CERN). كان الهدف الأساسي من HTML هو إنشاء طريقة لمشاركة المستندات العلمية بين الباحثين في جميع أنحاء العالم.</p>
                    
                    <h2>بنية مستند HTML</h2>
                    <p>يتكون مستند HTML من عناصر مختلفة، كل منها يؤدي وظيفة محددة. تتكون العناصر من وسوم فتح وإغلاق، مع محتوى بينهما. على سبيل المثال:</p>
                    
                    <pre><code>&lt;p&gt;هذا مثال على فقرة في HTML.&lt;/p&gt;</code></pre>
                    
                    <p>تتكون بنية مستند HTML الأساسية من العناصر التالية:</p>
                    
                    <ul>
                        <li><strong>&lt;!DOCTYPE html&gt;</strong>: يخبر المتصفح أن المستند هو HTML5.</li>
                        <li><strong>&lt;html&gt;</strong>: العنصر الجذر الذي يحتوي على جميع عناصر HTML الأخرى.</li>
                        <li><strong>&lt;head&gt;</strong>: يحتوي على معلومات حول المستند، مثل العنوان والوصف والروابط إلى ملفات CSS وJavaScript.</li>
                        <li><strong>&lt;title&gt;</strong>: يحدد عنوان الصفحة الذي يظهر في شريط عنوان المتصفح.</li>
                        <li><strong>&lt;body&gt;</strong>: يحتوي على المحتوى المرئي للصفحة، مثل النصوص والصور والروابط.</li>
                    </ul>
                    
                    <h2>العناصر الأساسية في HTML</h2>
                    
                    <h3>العناوين</h3>
                    <p>تستخدم وسوم العناوين من &lt;h1&gt; إلى &lt;h6&gt; لتحديد العناوين بمستويات مختلفة، حيث يكون &lt;h1&gt; هو الأكبر و&lt;h6&gt; هو الأصغر.</p>
                    
                    <h3>الفقرات</h3>
                    <p>يستخدم وسم &lt;p&gt; لتحديد فقرة من النص.</p>
                    
                    <h3>الروابط</h3>
                    <p>يستخدم وسم &lt;a&gt; لإنشاء روابط إلى صفحات أخرى أو مواقع أخرى. يتم تحديد وجهة الرابط باستخدام السمة href.</p>
                    <pre><code>&lt;a href="https://www.example.com"&gt;زيارة موقع مثال&lt;/a&gt;</code></pre>
                    
                    <h3>الصور</h3>
                    <p>يستخدم وسم &lt;img&gt; لعرض الصور في الصفحة. يتم تحديد مصدر الصورة باستخدام السمة src، ويجب دائمًا توفير نص بديل باستخدام السمة alt.</p>
                    <pre><code>&lt;img src="image.jpg" alt="وصف الصورة"&gt;</code></pre>
                    
                    <h3>القوائم</h3>
                    <p>توفر HTML نوعين رئيسيين من القوائم:</p>
                    <ul>
                        <li>القوائم غير المرتبة (&lt;ul&gt;): تستخدم للعناصر التي لا يهم ترتيبها.</li>
                        <li>القوائم المرتبة (&lt;ol&gt;): تستخدم للعناصر التي يكون ترتيبها مهمًا.</li>
                    </ul>
                    <p>يتم تحديد عناصر القائمة باستخدام وسم &lt;li&gt;.</p>
                    
                    <h3>الجداول</h3>
                    <p>تستخدم وسوم &lt;table&gt;، &lt;tr&gt;، &lt;th&gt;، و&lt;td&gt; لإنشاء جداول لعرض البيانات بشكل منظم.</p>
                    
                    <h3>النماذج</h3>
                    <p>تستخدم وسوم &lt;form&gt;، &lt;input&gt;، &lt;textarea&gt;، &lt;select&gt;، و&lt;button&gt; لإنشاء نماذج تفاعلية لجمع المدخلات من المستخدمين.</p>
                    
                    <h2>HTML5 والميزات الجديدة</h2>
                    <p>قدم HTML5 العديد من العناصر والميزات الجديدة، مثل:</p>
                    <ul>
                        <li>عناصر دلالية جديدة مثل &lt;header&gt;، &lt;footer&gt;، &lt;nav&gt;، &lt;section&gt;، &lt;article&gt;، و&lt;aside&gt;.</li>
                        <li>عناصر وسائط جديدة مثل &lt;audio&gt; و&lt;video&gt;.</li>
                        <li>عناصر رسومية مثل &lt;canvas&gt; و&lt;svg&gt;.</li>
                        <li>أنواع جديدة من حقول الإدخال مثل date، email، url، وغيرها.</li>
                        <li>دعم محسن للتطبيقات غير المتصلة بالإنترنت.</li>
                    </ul>
                    
                    <h2>أهمية HTML في تطوير الويب</h2>
                    <p>تعتبر HTML أساسية لتطوير الويب لأنها:</p>
                    <ul>
                        <li>توفر الهيكل الأساسي لصفحات الويب.</li>
                        <li>تسمح بتنظيم المحتوى بطريقة منطقية ومفهومة.</li>
                        <li>تعمل مع CSS وJavaScript لإنشاء مواقع ويب حديثة وتفاعلية.</li>
                        <li>تدعم إمكانية الوصول، مما يجعل المحتوى متاحًا للجميع، بما في ذلك الأشخاص ذوي الإعاقة.</li>
                        <li>تعمل عبر جميع المتصفحات والأجهزة.</li>
                    </ul>
                    
                    <p>باختصار، HTML هي اللغة الأساسية التي تمكننا من إنشاء صفحات ويب يمكن عرضها في المتصفحات. بينما تتطور التقنيات وتظهر أطر عمل جديدة، تظل HTML هي الأساس الذي تبنى عليه جميع مواقع الويب.</p>
                `
            },
            /*id 2 الخاص بي مقال css */
            '2': {
                title: 'تنسيق الصفحات باستخدام CSS',
                date: '28 مايو 2025',
                content: `
                    <p>CSS (أوراق الأنماط المتتالية) هي لغة تستخدم لوصف عرض وتنسيق مستند مكتوب بلغة ترميز مثل HTML. تسمح CSS بفصل المحتوى عن العرض، مما يجعل من السهل تغيير مظهر موقع الويب دون تعديل المحتوى الأساسي.</p>
                    
                    <h2>تاريخ CSS</h2>
                    <p>تم تطوير CSS في منتصف التسعينيات كحل لمشكلة فصل المحتوى عن العرض في HTML. قبل CSS، كان المطورون يستخدمون وسوم HTML مثل &lt;font&gt; لتنسيق النص، مما أدى إلى كود معقد وصعب الصيانة. تم إصدار CSS1 في عام 1996، تلاه CSS2 في عام 1998، وأخيرًا CSS3 الذي يتم تطويره على شكل وحدات منفصلة.</p>
                    
                    <h2>طرق استخدام CSS</h2>
                    <p>هناك ثلاث طرق رئيسية لإضافة CSS إلى مستند HTML:</p>
                    
                    <h3>1. الأنماط المضمنة (Inline CSS)</h3>
                    <p>يتم استخدام سمة style مباشرة داخل عنصر HTML:</p>
                    <pre><code>&lt;p style="color: blue; font-size: 16px;"&gt;هذا نص أزرق بحجم 16 بكسل.&lt;/p&gt;</code></pre>
                    
                    <h3>2. الأنماط الداخلية (Internal CSS)</h3>
                    <p>يتم تعريف الأنماط داخل عنصر &lt;style&gt; في قسم &lt;head&gt; من مستند HTML:</p>
                    <pre><code>&lt;head&gt;
  &lt;style&gt;
    p {
      color: blue;
      font-size: 16px;
    }
  &lt;/style&gt;
&lt;/head&gt;</code></pre>
                    
                    <h3>3. الأنماط الخارجية (External CSS)</h3>
                    <p>يتم تعريف الأنماط في ملف CSS خارجي ثم ربطه بمستند HTML باستخدام عنصر &lt;link&gt;:</p>
                    <pre><code>&lt;head&gt;
  &lt;link rel="stylesheet" href="styles.css"&gt;
&lt;/head&gt;</code></pre>
                    
                    <p>هذه الطريقة هي الأكثر فعالية لأنها تسمح بإعادة استخدام نفس الأنماط عبر صفحات متعددة وتجعل الصيانة أسهل.</p>
                    
                    <h2>بنية CSS</h2>
                    <p>تتكون قاعدة CSS من جزأين رئيسيين:</p>
                    <ul>
                        <li><strong>المحدد (Selector)</strong>: يحدد العنصر أو العناصر التي سيتم تطبيق الأنماط عليها.</li>
                        <li><strong>التصريح (Declaration)</strong>: يحدد كيفية تنسيق العناصر المحددة، ويتكون من زوج من الخاصية والقيمة.</li>
                    </ul>
                    
                    <pre><code>selector {
  property: value;
  property: value;
}</code></pre>
                    
                    <h2>أنواع المحددات في CSS</h2>
                    
                    <h3>محدد العنصر (Element Selector)</h3>
                    <p>يستهدف جميع العناصر من نوع معين:</p>
                    <pre><code>p {
  color: blue;
}</code></pre>
                    
                    <h3>محدد المعرف (ID Selector)</h3>
                    <p>يستهدف عنصرًا فريدًا بناءً على قيمة سمة id:</p>
                    <pre><code>#header {
  background-color: black;
}</code></pre>
                    
                    <h3>محدد الفئة (Class Selector)</h3>
                    <p>يستهدف عناصر متعددة بناءً على قيمة سمة class:</p>
                    <pre><code>.button {
  border-radius: 5px;
}</code></pre>
                    
                    <h3>محدد السمة (Attribute Selector)</h3>
                    <p>يستهدف العناصر بناءً على وجود أو قيمة سمة معينة:</p>
                    <pre><code>input[type="text"] {
  border: 1px solid gray;
}</code></pre>
                    
                    <h3>المحدد الشبه فئة (Pseudo-class Selector)</h3>
                    <p>يستهدف العناصر في حالة معينة:</p>
                    <pre><code>a:hover {
  color: red;
}</code></pre>
                    
                    <h2>الخصائص الأساسية في CSS</h2>
                    
                    <h3>تنسيق النص</h3>
                    <ul>
                        <li><strong>color</strong>: لون النص</li>
                        <li><strong>font-family</strong>: نوع الخط</li>
                        <li><strong>font-size</strong>: حجم الخط</li>
                        <li><strong>font-weight</strong>: سمك الخط</li>
                        <li><strong>text-align</strong>: محاذاة النص</li>
                        <li><strong>text-decoration</strong>: زخرفة النص (مثل التسطير)</li>
                        <li><strong>line-height</strong>: ارتفاع السطر</li>
                    </ul>
                    
                    <h3>تنسيق الخلفية</h3>
                    <ul>
                        <li><strong>background-color</strong>: لون الخلفية</li>
                        <li><strong>background-image</strong>: صورة الخلفية</li>
                        <li><strong>background-repeat</strong>: تكرار صورة الخلفية</li>
                        <li><strong>background-position</strong>: موضع صورة الخلفية</li>
                        <li><strong>background-size</strong>: حجم صورة الخلفية</li>
                    </ul>
                    
                    <h3>نموذج الصندوق (Box Model)</h3>
                    <p>يتكون نموذج الصندوق في CSS من:</p>
                    <ul>
                        <li><strong>width/height</strong>: عرض وارتفاع المحتوى</li>
                        <li><strong>padding</strong>: المساحة بين المحتوى والحدود</li>
                        <li><strong>border</strong>: الحدود حول العنصر</li>
                        <li><strong>margin</strong>: المساحة خارج الحدود</li>
                    </ul>
                    
                    <h2>تقنيات تخطيط CSS الحديثة</h2>
                    
                    <h3>Flexbox</h3>
                    <p>Flexbox هو نموذج تخطيط أحادي البعد يسمح بترتيب العناصر في صف أو عمود، مع إمكانية التحكم في المحاذاة والتوزيع والترتيب.</p>
                    <pre><code>.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}</code></pre>
                    
                    <h3>Grid</h3>
                    <p>Grid هو نموذج تخطيط ثنائي البعد يسمح بإنشاء تخطيطات معقدة باستخدام صفوف وأعمدة.</p>
                    <pre><code>.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-gap: 20px;
}</code></pre>
                    
                    <h2>التصميم المتجاوب (Responsive Design)</h2>
                    <p>التصميم المتجاوب هو نهج في تصميم الويب يجعل صفحات الويب تعرض بشكل جيد على جميع الأجهزة والشاشات. يعتمد على:</p>
                    
                    <h3>الوحدات النسبية</h3>
                    <p>استخدام وحدات مثل % و em و rem بدلاً من وحدات ثابتة مثل px.</p>
                    
                    <h3>استعلامات الوسائط (Media Queries)</h3>
                    <p>تسمح بتطبيق أنماط مختلفة بناءً على خصائص الجهاز مثل عرض الشاشة:</p>
                    <pre><code>@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}</code></pre>
                    
                    <h3>الصور المتجاوبة</h3>
                    <p>جعل الصور تتكيف مع حجم الشاشة:</p>
                    <pre><code>img {
  max-width: 100%;
  height: auto;
}</code></pre>
                    
                    <h2>متغيرات CSS (Custom Properties)</h2>
                    <p>تسمح متغيرات CSS بتعريف قيم يمكن إعادة استخدامها في جميع أنحاء ورقة الأنماط:</p>
                    <pre><code>:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
}

.button {
  background-color: var(--primary-color);
}

.header {
  color: var(--secondary-color);
}</code></pre>
                    
                    <h2>الرسوم المتحركة والتحولات</h2>
                    
                    <h3>التحولات (Transitions)</h3>
                    <p>تسمح بتغيير قيم الخصائص بسلاسة على مدى فترة زمنية محددة:</p>
                    <pre><code>.button {
  background-color: blue;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: red;
}</code></pre>
                    
                    <h3>الرسوم المتحركة (Animations)</h3>
                    <p>تسمح بإنشاء تأثيرات حركية أكثر تعقيدًا:</p>
                    <pre><code>@keyframes slide-in {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

.element {
  animation: slide-in 1s ease-out;
}</code></pre>
                    
                    <h2>أهمية CSS في تطوير الويب</h2>
                    <p>CSS ضرورية لتطوير الويب الحديث لأنها:</p>
                    <ul>
                        <li>تفصل المحتوى عن العرض، مما يسهل الصيانة.</li>
                        <li>تسمح بإنشاء تصميمات جذابة وتفاعلية.</li>
                        <li>تمكن من إنشاء مواقع متجاوبة تعمل على جميع الأجهزة.</li>
                        <li>تحسن تجربة المستخدم من خلال التفاعلات البصرية.</li>
                        <li>تقلل من حجم الكود وتحسن الأداء.</li>
                    </ul>
                    
                    <p>باختصار، CSS هي اللغة التي تحول هيكل HTML الأساسي إلى تصميم جذاب وسهل الاستخدام. مع تطور الويب، أصبحت CSS أكثر قوة وتعقيدًا، مما يسمح للمطورين بإنشاء تجارب مستخدم غنية ومتطورة.</p>
                `
            },
            /*id 3 الخاص بي javascript  مقال  */
            '3': {
                title: 'البرمجة التفاعلية مع JavaScript',
                date: '28 مايو 2025',
                content: `
                    <p>JavaScript هي لغة برمجة عالية المستوى، متعددة النماذج، وتفسيرية، تستخدم بشكل أساسي لإضافة التفاعل والديناميكية إلى صفحات الويب. على عكس HTML وCSS، التي تركز على الهيكل والتصميم، تسمح JavaScript بإنشاء تجارب مستخدم تفاعلية وديناميكية.</p>
                    
                    <h2>تاريخ JavaScript</h2>
                    <p>تم تطوير JavaScript في عام 1995 من قبل بريندان إيتش في شركة Netscape. كان الهدف الأصلي هو إنشاء لغة برمجة بسيطة يمكن للمصممين والمطورين غير المحترفين استخدامها. على الرغم من اسمها، فإن JavaScript ليس لها علاقة بلغة Java، باستثناء بعض التشابهات في بناء الجملة.</p>
                    
                    <p>مع مرور الوقت، تطورت JavaScript من لغة بسيطة لإضافة تفاعلات بسيطة إلى لغة قوية يمكن استخدامها لتطوير تطبيقات ويب كاملة، وحتى تطبيقات سطح المكتب والهاتف المحمول.</p>
                    
                    <h2>أساسيات JavaScript</h2>
                    
                    <h3>إضافة JavaScript إلى صفحة HTML</h3>
                    <p>يمكن إضافة JavaScript إلى صفحة HTML بثلاث طرق:</p>
                    
                    <h4>1. الكود المضمن (Inline JavaScript)</h4>
                    <pre><code>&lt;button onclick="alert('مرحبا بالعالم!')"&gt;انقر هنا&lt;/button&gt;</code></pre>
                    
                    <h4>2. الكود الداخلي (Internal JavaScript)</h4>
                    <pre><code>&lt;script&gt;
  function sayHello() {
    alert('مرحبا بالعالم!');
  }
&lt;/script&gt;</code></pre>
                    
                    <h4>3. الكود الخارجي (External JavaScript)</h4>
                    <pre><code>&lt;script src="script.js"&gt;&lt;/script&gt;</code></pre>
                    
                    <h3>المتغيرات والأنواع الأساسية</h3>
                    <p>في JavaScript، يمكن تعريف المتغيرات باستخدام var أو let أو const:</p>
                    
                    <pre><code>// المتغيرات
let name = 'أحمد';  // سلسلة نصية
const age = 30;     // رقم
var isActive = true; // قيمة منطقية

// الأنواع الأساسية
// String (سلسلة نصية)
let greeting = 'مرحبا بالعالم';

// Number (رقم)
let count = 42;
let price = 19.99;

// Boolean (قيمة منطقية)
let isLoggedIn = false;

// Null (قيمة فارغة)
let user = null;

// Undefined (غير معرف)
let address;

// Object (كائن)
let person = {
  name: 'سارة',
  age: 25,
  city: 'القاهرة'
};

// Array (مصفوفة)
let colors = ['أحمر', 'أخضر', 'أزرق'];</code></pre>
                    
                    <h3>العمليات الحسابية والمنطقية</h3>
                    <pre><code>// العمليات الحسابية
let sum = 5 + 10;      // 15
let difference = 20 - 5; // 15
let product = 4 * 3;    // 12
let quotient = 20 / 4;  // 5
let remainder = 10 % 3; // 1

// العمليات المنطقية
let isTrue = true && true;   // true (و)
let isFalse = true && false; // false
let isEither = true || false; // true (أو)
let isNot = !true;           // false (ليس)</code></pre>
                    
                    <h3>جمل التحكم</h3>
                    
                    <h4>جملة if...else</h4>
                    <pre><code>let hour = 14;

if (hour < 12) {
  console.log('صباح الخير');
} else if (hour < 18) {
  console.log('مساء الخير');
} else {
  console.log('مساء النور');
}</code></pre>
                    
                    <h4>جملة switch</h4>
                    <pre><code>let day = 'الأربعاء';

switch (day) {
  case 'السبت':
    console.log('بداية الأسبوع');
    break;
  case 'الأربعاء':
    console.log('منتصف الأسبوع');
    break;
  case 'الجمعة':
    console.log('نهاية الأسبوع');
    break;
  default:
    console.log('يوم عادي');
}</code></pre>
                    
                    <h3>الحلقات (Loops)</h3>
                    
                    <h4>حلقة for</h4>
                    <pre><code>for (let i = 0; i < 5; i++) {
  console.log('العداد: ' + i);
}</code></pre>
                    
                    <h4>حلقة while</h4>
                    <pre><code>let count = 0;
while (count < 5) {
  console.log('العداد: ' + count);
  count++;
}</code></pre>
                    
                    <h4>حلقة for...of (للمصفوفات)</h4>
                    <pre><code>const fruits = ['تفاح', 'موز', 'برتقال'];
for (const fruit of fruits) {
  console.log(fruit);
}</code></pre>
                    
                    <h4>حلقة for...in (للكائنات)</h4>
                    <pre><code>const person = {
  name: 'محمد',
  age: 28,
  job: 'مطور'
};

for (const key in person) {
  console.log(key + ': ' + person[key]);
}</code></pre>
                    
                    <h3>الدوال (Functions)</h3>
                    
                    <h4>تعريف الدوال</h4>
                    <pre><code>// دالة تقليدية
function greet(name) {
  return 'مرحبا، ' + name + '!';
}

// تعبير دالة
const multiply = function(a, b) {
  return a * b;
};

// دالة سهمية (Arrow Function)
const add = (a, b) => a + b;</code></pre>
                    
                    <h4>استدعاء الدوال</h4>
                    <pre><code>let message = greet('سارة');
console.log(message); // مرحبا، سارة!

let result = multiply(4, 5);
console.log(result); // 20

console.log(add(10, 5)); // 15</code></pre>
                    
                    <h2>التعامل مع DOM</h2>
                    <p>DOM (Document Object Model) هو واجهة برمجة تمثل صفحة HTML كشجرة من الكائنات، مما يسمح لـ JavaScript بالتفاعل مع عناصر الصفحة وتعديلها.</p>
                    
                    <h3>الوصول إلى عناصر DOM</h3>
                    <pre><code>// بواسطة المعرف (ID)
const header = document.getElementById('header');

// بواسطة اسم العلامة (Tag)
const paragraphs = document.getElementsByTagName('p');

// بواسطة اسم الفئة (Class)
const buttons = document.getElementsByClassName('btn');

// بواسطة محدد CSS
const firstButton = document.querySelector('.btn');
const allButtons = document.querySelectorAll('.btn');</code></pre>
                    
                    <h3>تعديل محتوى وخصائص العناصر</h3>
                    <pre><code>// تغيير المحتوى النصي
header.textContent = 'عنوان جديد';

// تغيير HTML الداخلي
header.innerHTML = '&lt;span&gt;عنوان&lt;/span&gt; جديد';

// تغيير السمات
const link = document.getElementById('myLink');
link.href = 'https://www.example.com';
link.setAttribute('target', '_blank');

// تغيير الأنماط
header.style.color = 'blue';
header.style.fontSize = '24px';</code></pre>
                    
                    <h3>إضافة وإزالة العناصر</h3>
                    <pre><code>// إنشاء عنصر جديد
const newParagraph = document.createElement('p');
newParagraph.textContent = 'هذه فقرة جديدة';

// إضافة العنصر إلى DOM
document.body.appendChild(newParagraph);

// إزالة عنصر
const oldParagraph = document.getElementById('oldParagraph');
oldParagraph.parentNode.removeChild(oldParagraph);</code></pre>
                    
                    <h3>التعامل مع الأحداث (Events)</h3>
                    <pre><code>// إضافة مستمع حدث
const button = document.getElementById('myButton');

button.addEventListener('click', function(event) {
  alert('تم النقر على الزر!');
});

// أحداث شائعة
// click: النقر على عنصر
// submit: إرسال نموذج
// keydown, keyup: ضغط أو تحرير مفتاح
// mouseover, mouseout: تحريك المؤشر فوق أو خارج عنصر
// load: اكتمال تحميل الصفحة
// resize: تغيير حجم النافذة
// scroll: التمرير</code></pre>
                    
                    <h2>المفاهيم المتقدمة في JavaScript</h2>
                    
                    <h3>المصفوفات وطرق المعالجة</h3>
                    <pre><code>const numbers = [1, 2, 3, 4, 5];

// map: إنشاء مصفوفة جديدة بتطبيق دالة على كل عنصر
const doubled = numbers.map(num => num * 2);
// [2, 4, 6, 8, 10]

// filter: إنشاء مصفوفة جديدة بالعناصر التي تحقق شرطًا
const evenNumbers = numbers.filter(num => num % 2 === 0);
// [2, 4]

// reduce: تقليص المصفوفة إلى قيمة واحدة
const sum = numbers.reduce((total, num) => total + num, 0);
// 15

// forEach: تنفيذ دالة على كل عنصر
numbers.forEach(num => console.log(num));</code></pre>
                    
                    <h3>الوعود (Promises) والتزامن</h3>
                    <p>الوعود هي كائنات تمثل إكمال أو فشل عملية غير متزامنة.</p>
                    <pre><code>// إنشاء وعد
const fetchData = new Promise((resolve, reject) => {
  // محاكاة طلب شبكة
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve({ id: 1, name: 'بيانات المستخدم' });
    } else {
      reject('فشل في جلب البيانات');
    }
  }, 2000);
});

// استخدام الوعد
fetchData
  .then(data => {
    console.log('البيانات:', data);
  })
  .catch(error => {
    console.error('خطأ:', error);
  })
  .finally(() => {
    console.log('اكتملت العملية');
  });</code></pre>
                    
                    <h3>Async/Await</h3>
                    <p>Async/Await هي طريقة أكثر وضوحًا للتعامل مع العمليات غير المتزامنة.</p>
                    <pre><code>async function getUserData() {
  try {
    // انتظار اكتمال الوعد
    const data = await fetchData;
    console.log('البيانات:', data);
  } catch (error) {
    console.error('خطأ:', error);
  }
}

getUserData();</code></pre>
                    
                    <h3>التخزين المحلي (Local Storage)</h3>
                    <pre><code>// تخزين البيانات
localStorage.setItem('username', 'أحمد');

// استرجاع البيانات
const username = localStorage.getItem('username');

// حذف عنصر
localStorage.removeItem('username');

// حذف كل البيانات
localStorage.clear();</code></pre>
                    
                    <h2>أطر عمل وتقنيات JavaScript الحديثة</h2>
                    <p>مع تطور JavaScript، ظهرت العديد من أطر العمل والمكتبات التي تسهل تطوير تطبيقات الويب:</p>
                    
                    <h3>مكتبات واجهة المستخدم</h3>
                    <ul>
                        <li><strong>React</strong>: مكتبة لبناء واجهات مستخدم تفاعلية</li>
                        <li><strong>Vue.js</strong>: إطار عمل تدريجي لبناء واجهات المستخدم</li>
                        <li><strong>Angular</strong>: إطار عمل شامل لتطوير تطبيقات الويب</li>
                    </ul>
                    
                    <h3>JavaScript على جانب الخادم</h3>
                    <ul>
                        <li><strong>Node.js</strong>: بيئة تشغيل JavaScript على الخادم</li>
                        <li><strong>Express</strong>: إطار عمل ويب لـ Node.js</li>
                    </ul>
                    
                    <h2>أهمية JavaScript في تطوير الويب</h2>
                    <p>JavaScript ضرورية لتطوير الويب الحديث لأنها:</p>
                    <ul>
                        <li>تضيف التفاعل والديناميكية إلى صفحات الويب</li>
                        <li>تسمح بتحديث المحتوى دون إعادة تحميل الصفحة</li>
                        <li>تمكن من إنشاء تطبيقات ويب أحادية الصفحة (SPAs)</li>
                        <li>تعمل على جانب العميل والخادم</li>
                        <li>تدعم تطوير تطبيقات متعددة المنصات</li>
                    </ul>
                    
                    <p>باختصار، JavaScript هي اللغة التي تحول صفحات الويب الثابتة إلى تطبيقات تفاعلية وديناميكية. مع تطور التقنيات والأدوات، أصبحت JavaScript أكثر قوة وتنوعًا، مما يجعلها أساسية لأي مطور ويب حديث.</p>
                `
            }
        };
        
        // عرض المقال المطلوب
        if (posts[postId]) {
            document.getElementById('post-title').textContent = posts[postId].title;
            document.getElementById('post-date').textContent = posts[postId].date;
            postContent.innerHTML = posts[postId].content;
        } else {
            postContent.innerHTML = '<p>المقال غير موجود</p>';
        }
    }
}

// تنفيذ الدوال عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    navSlide();
    validateForm();
    smoothScroll();
    loadPost();
});
