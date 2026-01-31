const { test, expect } = require('@playwright/test');

test.describe('IT3040 Assignment 1: Singlish to Sinhala Transliteration', () => {

    test.beforeEach(async ({ page }) => {
        // Navigate to the base URL defined in playwright.config.js
        await page.goto('/', { waitUntil: 'networkidle' });
    });

    /** * POSITIVE FUNCTIONAL TESTS (24 Scenarios)
     */
    const positiveScenarios = [
        { id: '0001', input: 'oyaata apee gedhara enna puluvan kavadhdha?', expected: 'ඔයාට අපේ ගෙදර එන්න පුලුවන් කවද්ද?' },
        { id: '0002', input: 'Mama hodhata nidhaa gaththa,eth mata nidhimathayi.', expected: 'මම හොදට නිදා ගත්ත,එත් මට නිදිමතයි.' },
        { id: '0003', input: 'suBha naththalak veevaa!', expected: 'සුභ නත්තලක් වේවා!' },
        { id: '0004', input: 'Api labana sathiyee pansal yamu.', expected: 'අපි ලබන සතියේ පන්සල් යමු.' },
        { id: '0005', input: 'magee phone eken game gahanna bae.', expected: 'මගේ phone එකෙන් game ගහන්න බැ.' },
        { id: '0006', input: 'badhulle yanna night mail  eka thiyanavaadha?', expected: 'බදුල්ලෙ යන්න night mail  එක තියනවාද?' },
        { id: '0007', input: 'mata adha asaniipayi vaedata enna venne nae', expected: 'මට අද අසනීපයි වැඩට එන්න වෙන්නෙ නැ' },
        { id: '0008', input: 'mee vaedeeta mata poddak udhavu karanavadha?', expected: 'මේ වැඩේට මට පොඩ්ඩක් උදවු කරනවද?' },
        { id: '0009', input: 'KT session eka 11.00A.M. ta thiyanavaa.', expected: 'KT session එක 11.00A.M. ට තියනවා.' },
        { id: '0010', input: 'dhaval kaeema valata ru.2500 giyaa.', expected: 'දවල් කෑම වලට රු.2500 ගියා.' },
        { id: '0011', input: 'oyaata kohomadha?', expected: 'ඔයාට කොහොමද?' },
        { id: '0012', input: 'vaessa nisaa enna parakku unaa.', expected: 'වැස්ස නිසා එන්න පරක්කු උනා.' },
        { id: '0013', input: 'gaallata thava 80Km k thiyanavaa.', expected: 'ගාල්ලට තව 80Km ක් තියනවා.' },
        { id: '0014', input: 'vahaama navathinu', expected: 'වහාම නවතිනු' },
        { id: '0015', input: 'Adee meeka patta ban', expected: 'අඩේ මේක පට්ට බන්' },
        { id: '0016', input: 'ayiyoo! mage kakula peralunaa.', expected: 'අයියෝ! mage කකුල පෙරලුනා.' },
        { id: '0017', input: 'mama Telegram eken message ekak yaevvaa.', expected: 'මම Telegram එකෙන් message එකක් යැව්වා.' },
        { id: '0018', input: 'panthiyee Lamayi haemooma pittaniyee sellam karanavaa.', expected: 'පන්තියේ ළමයි හැමෝම පිට්ටනියේ සෙල්ලම් කරනවා.' },
        { id: '0019', input: 'Mata godak sathutu hithunaa keek eka dhaekalaa.', expected: 'මට ගොඩක් සතුටු හිතුනා කේක් එක දැකලා.' },
        { id: '0020', input: 'gaNithaya peapar ekata lakuNu 80% yi.', expected: 'ගණිතය පේපර් එකට ලකුණු 80% යි.' },
        { id: '0021', input: 'giya sathiyee mama gedhara giyaa.', expected: 'ගිය සතියේ මම ගෙදර ගියා.' },
        { id: '0022', input: 'puluvan nam  mata lakshayak dhenna heta.', expected: 'පුලුවන් නම්  මට ලක්ශයක් දෙන්න හෙට.' },
        { id: '0023', input: 'Adee eLa ban.', expected: 'අඩේ එළ බන්.' },
        { id: '0024', input: 'suba maQQgalam!', expected: 'සුබ මංගලම්!'     }  
        
    ];

    for (const data of positiveScenarios) {
        test(`Pos_Fun_${data.id}: ${data.input}`, async ({ page }) => {
            // Locate the input field by its placeholder and fill it
            const inputField = page.getByPlaceholder('Input Your Singlish Text Here.');
            await inputField.fill(data.input);
            // Trigger input event by typing to ensure the transliteration logic runs
            await inputField.dispatchEvent('input');
            // Also trigger change event
            await inputField.dispatchEvent('change');
            // Trigger blur as well
            await inputField.blur();
            
            // Locate the output field (the element following "Sinhala" label) and wait for it to have text
            const outputLocator = page.locator('text=Sinhala').locator('xpath=following-sibling::*').first();
            await expect(outputLocator).toHaveText(data.expected, { timeout: 15000 });
        });
    }

    /** * NEGATIVE FUNCTIONAL TESTS (10 Scenarios)
     */
    const negativeScenarios = [

        { id: '0025', input: 'ada sliit ekata giyada?', expected: 'අද ස්ලීට් එකට ගියාද?' },
        { id: '0026', input: 'ammaaa', expected: 'අම්මා' },
        { id: '0027', input: '##mal devaeta', expected: '##මල් දෙවැට' },
        { id: '0028', input: ' I am going to school', expected: 'I am going to school' },
        { id: '0029', input: 'nanri maedam', expected: 'නන්ඩ්‍රි මැඩම්'  },
        { id: '0030', input: 'asdfghlk', expected: 'asdfghlk' },
        { id: '0031', input: '<p> customer 360 </P>.', expected: '<p> customer 360 </P>' },
        { id: '0032', input: 'mama wadata yanava', expected: 'මම වැඩට යනවා'     },
        { id: '0033', input: 'Api HeTa waWatA YaMU', expected: 'අපි හෙට වැවට යමු.'     },
        { id: '0034', input: 'mama ada ude awadi wela,muhuna sodala ude the eka biwa.ita passe wadata yanna adaththa.177 bus eke nagala mn office ekata giya.ita passe mn hawasa 5.00 wenakan wada kara.ita passe office eke aya ekka kanna giya eliyata.kala iwara wela ayamath bodimata enna mn bus ekata nagga.ra 8.00 withara una mn eddi.awith nala kala mn adata awith pothak kiyewuwa.kiyawala 12.00 pahuwela nida gaththa.pahuwada udema nagitala lectures yanna lasthi una.ita passe lectures walata idala dawalta kala mn gedr enna 17 bus ekata nagga.eke godak senaga hitiya.mn balummaharin bassa.bahala 57 bus ekaka nagala gedr awa.ita passe mn nangita kanna dekuth aran bus ekata nagga ayama gedr yanna.ita passe gedara awith nala kala relax eke hitiya.ita passe assessment ekak thibila eka karann gaththa.ita passe the bila tikak nidagena aharila ayamath potha kiyawanna patan gaththa.ammata rata kama haddanna udawu kara.', expected: 'මම අද උදෙ අවදි වෙලා,මුහුන සොදල උදෙ තෙ එක බිවා.ඉට පස්සෙ වඩට යන්න අඩත්ත.177 bus eke නැගල man office එකට ගිය.ඉට පස්සෙ ම්න් හවස 5.00 වෙනකන් වඩ කර.ඉට පස්සෙ office eke අය එක්ක කන්න ගිය එලියට.කල ඉවර වෙල අයමත් බොඩිමට එන්න man bus එකට නග්ග.ර 8.00 විතර උන ම්න් එඩ්ඩි.අවිත් නල කල ම්න් අඩට අවිත් පොතක් කියෙවුව.කියවල 12.00 පහුවෙල නිඩ ගත්ත.පහුවඩ උඩෙම නේගිටල lectures යන්න ලස්ති උන.ඉට පස්සෙ lectures වලට ඉඩල ඩවල්ට කල ම්න් ගෙඩ්‍ර එන්න 17 bus එකට නග්ග.eke ගොඩක් සෙනග හිටිය.ම්න් බලුම්මහරින් බස්ස.බහල 57 bus එකක නගල ගෙඩ්‍ර අව.ඉට පස්සෙ ම්න් නන්ගිට කන්න ඩෙකුත් අරන් bus එකට නග්ග අයම ගෙඩ්‍ර යන්න.ඉට පස්සෙ ගෙඩර අwඉත් නල කල relax eke හිටිය.ඉට පස්සෙ assessment එකක් තිබිල එක කරන්න් ගත්ත.ඉට පස්සෙ තෙ බිල ටිකක් නිඩගෙන අහරිල අයමත් පොත කියwඅන්න පටන් ගත්ත.අම්මට රට කම හඩ්ඩන්න උඩවු කර.'     }
    ];

    for (const data of negativeScenarios) {
        test(`Neg_Fun_${data.id}: ${data.input}`, async ({ page }) => {
            // Locate the input field by its placeholder and fill it
            const inputField = page.getByPlaceholder('Input Your Singlish Text Here.');
            await inputField.fill(data.input);
            // Trigger input event by typing to ensure the transliteration logic runs
            await inputField.dispatchEvent('input');
            // Also trigger change event
            await inputField.dispatchEvent('change');
            // Trigger blur as well
            await inputField.blur();
            
            // Locate the output field (the element following "Sinhala" label) and wait for it to have text
            const outputLocator = page.locator('text=Sinhala').locator('xpath=following-sibling::*').first();
            await expect(outputLocator).toHaveText(data.expected, { timeout: 15000 });
        });
        
    }

    /** * UI TEST (1 Scenario)
     */
    test('Pos_UI_0002: Real-time clearing of output', async ({ page }) => {
        const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
        const outputArea = page.locator('text=Sinhala').locator('xpath=following-sibling::*').first();

        await inputArea.fill('Test text');
        await inputArea.dispatchEvent('input');
        await inputArea.fill(''); // Clear input
        await inputArea.dispatchEvent('input');
        
        // Wait for the UI to clear the output
        await expect(outputArea).toHaveText('', { timeout: 10000 });
    });
});