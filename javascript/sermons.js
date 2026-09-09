// ============================================================
// Sermon & Conference Data + Logic
// Used by: Daily Sermon link, Find-a-Sermon button, Weekly Conference link
// ============================================================

// ---- Talk list (used for both the "Daily Sermon" and "Find a Sermon" features) ----
const sermonList = [
    // Abraham O. Woodruff
    "https://catalog.churchofjesuschrist.org/assets/05b5e149-678f-4b83-aaca-453e70484dbc/0/46",
    "https://catalog.churchofjesuschrist.org/assets/05b5e149-678f-4b83-aaca-453e70484dbc/0/57",
    "https://catalog.churchofjesuschrist.org/assets/3acbf487-bd5c-4883-ab4e-fe69af03c394/0/20",
    "https://catalog.churchofjesuschrist.org/assets/dde7905e-1866-4e23-9775-b9f598d03a5c/0/6",
    "https://catalog.churchofjesuschrist.org/assets/dde7905e-1866-4e23-9775-b9f598d03a5c/0/57",
    "https://catalog.churchofjesuschrist.org/assets/7bd3dd79-f12a-41a9-970c-d0b828d78a14/0/7",
    "https://catalog.churchofjesuschrist.org/assets/7bd3dd79-f12a-41a9-970c-d0b828d78a14/0/61",
    "https://catalog.churchofjesuschrist.org/assets/2e1b3234-9fd5-48b9-b43d-161719f249aa/0/37",
    "https://catalog.churchofjesuschrist.org/assets/661021d6-aec7-4aa9-80f7-50566d685298/0/14",
    "https://catalog.churchofjesuschrist.org/assets/661021d6-aec7-4aa9-80f7-50566d685298/0/57",
    "https://catalog.churchofjesuschrist.org/assets/12ff548e-6f93-4580-b619-ca2e31b265d6/0/12",
    "https://catalog.churchofjesuschrist.org/assets/182a9665-6c4b-42d3-99d1-b96e8f900640/0/54",
    "https://catalog.churchofjesuschrist.org/assets/980dd5eb-f06b-48b2-a074-669207472d2f/0/31",
    "https://catalog.churchofjesuschrist.org/assets/980dd5eb-f06b-48b2-a074-669207472d2f/0/79",
    "https://catalog.churchofjesuschrist.org/assets/34b0275f-2c3a-4e95-8e80-dca34e7d333d/0/33",
    "https://catalog.churchofjesuschrist.org/assets/34b0275f-2c3a-4e95-8e80-dca34e7d333d/0/49",
    "https://catalog.churchofjesuschrist.org/assets/fead2648-523d-444f-9b96-6d4343199d7e/0/22",
    "https://catalog.churchofjesuschrist.org/assets/027f29e8-af66-4745-97af-ea632ef4a98f/0/35",
    // Adam S. Bennion
    "https://catalog.churchofjesuschrist.org/assets/cda0a4fc-a051-4fba-9a4a-1c60aeaec7d5/0/0/",
    // Albert E. Bowen
    "https://catalog.churchofjesuschrist.org/assets/5cb5ef96-7eec-4e0c-8cf2-4fae088c621e/0/0?lang=eng",
    "https://catalog.churchofjesuschrist.org/assets/24e364ea-afc9-4a78-9419-fe834e9d0185/0/0?lang=eng",
    // Alvin R. Dyer
    "https://catalog.churchofjesuschrist.org/assets/15ffe853-4b17-4e5a-9477-63377b3e5517/0/0/",
    // Bruce R. McConkie
    "https://catalog.churchofjesuschrist.org/assets/aa0ea520-64a2-47cb-ab9f-424e15be1bb1/0/0/",
    // Boyd K. Packer
    "https://catalog.churchofjesuschrist.org/assets/fc236e47-4bd6-42ad-8516-561c9f529708/0/0/",
    // David O. McKay
    "https://catalog.churchofjesuschrist.org/assets/e43b0963-b35d-4eb6-b51e-320874748922/0/0/",
    "https://catalog.churchofjesuschrist.org/assets/5d0f4b75-03a5-4800-a45a-2d25051c7bb0/0/0/",
    "https://catalog.churchofjesuschrist.org/assets/8c2acaa3-06dc-4d51-b714-d7a40e05c52e/0/0/",
    "https://catalog.churchofjesuschrist.org/assets/37828144-3827-4c89-90bb-de8fc788a393/0/0/",
    "https://catalog.churchofjesuschrist.org/assets/44a06f94-3dc1-4a23-9a85-cbfb55ff842d/0/0/",
    "https://catalog.churchofjesuschrist.org/assets/cfd15624-88ab-4881-9485-8c171e443a48/0/0/",
    "https://catalog.churchofjesuschrist.org/assets/ab75b5f6-3424-49d9-adc5-3f7682b782b7/0/0/",
    "https://catalog.churchofjesuschrist.org/assets/6858612d-b88b-4d38-84a5-ea32de5d5eab/0/0/",
    "https://catalog.churchofjesuschrist.org/assets/0b077c2b-f002-4a34-b5b1-fa581f0a50d8/0/0/",
    "https://catalog.churchofjesuschrist.org/assets/4852313f-5818-4de4-96fb-bc6c6c882fa8/0/0/",
    // Delbert L. Stapley
    "https://catalog.churchofjesuschrist.org/assets/12d446c9-2dda-4205-91e0-642bf22b95e7/0/0/",
    "https://catalog.churchofjesuschrist.org/assets/188936a0-10df-46c6-934f-0b8bf017a17d/0/0/",
    // Ezra Taft Benson
    "https://catalog.churchofjesuschrist.org/assets/61d34a60-8e3d-4614-a312-574126dce02d/0/0/",
    "https://catalog.churchofjesuschrist.org/assets/89261c48-f327-4352-af72-9bf52455304c/0/0/",
    "https://catalog.churchofjesuschrist.org/assets/de4c5959-c259-4ffd-a782-fd8e9ad54f98/0/0/",
    // George Albert Smith
    "https://catalog.churchofjesuschrist.org/assets/972768f2-f944-4363-bf3c-d27586faf70c/0/0/",
    "https://catalog.churchofjesuschrist.org/assets/ded56c70-e169-427d-ad18-ddfdd6271712/0/0/",
    // George Q. Morris
    "https://catalog.churchofjesuschrist.org/assets/69efda93-8348-4482-9da4-dcdd0d6482ae/0/0/",
    // Henry D. Moyle
    "https://catalog.churchofjesuschrist.org/assets/8e5a8727-0b35-4e18-93a1-a20a1f759fdf/0/0/",
    "https://catalog.churchofjesuschrist.org/assets/f19d6e10-7aef-4948-87a0-505e73f0a1fd/0/0/",
    "https://catalog.churchofjesuschrist.org/assets/cacd0f94-9cff-4a72-8010-b10527dab2ab/0/0/",
    // Harold B. Lee
    "https://catalog.churchofjesuschrist.org/assets/ffa8e247-03ee-4d01-82ad-84e6e92f4ec7/0/0/",
    "https://catalog.churchofjesuschrist.org/assets/b6c13780-ae9d-4a07-a22a-eb1ebc07c6ca/0/0/",
    "https://catalog.churchofjesuschrist.org/assets/5b13d2e0-1ca1-4767-8c24-cdc321d9716f/0/0/",
    "https://catalog.churchofjesuschrist.org/assets/be033abe-4f32-4ce4-946b-1bb2c617368c/0/0/",
    // Hugh B. Brown
    "https://catalog.churchofjesuschrist.org/assets/69c0b01e-7895-44af-b785-a7a0b381ec7f/0/0/",
    // J. Reuben Clark Jr.
    "https://catalog.churchofjesuschrist.org/assets/e967e3fc-3750-4007-a450-a94e7d7c7fe4/0/0?lang=eng",
    "https://catalog.churchofjesuschrist.org/assets/ef007115-aab4-4571-86e0-5c0b773bd5af/0/0/",
    "https://catalog.churchofjesuschrist.org/assets/1bf8eef7-1780-48c9-8ce3-5d38ec16430d/0/0/",
    "https://catalog.churchofjesuschrist.org/assets/2aa2b7b9-e41b-4c17-8362-7b2ca1b9e2b4/0/0/",
    "https://catalog.churchofjesuschrist.org/assets/dec182c6-39e6-4f17-9248-5218738cd040/0/0/",
    "https://catalog.churchofjesuschrist.org/assets/d3a7fd00-2c51-423f-90f3-fb7ea3dd4b42/0/0/",
    "https://catalog.churchofjesuschrist.org/assets/62a390de-2379-4e3d-86da-50a363399f46/0/0/",
    "https://catalog.churchofjesuschrist.org/assets/7dfb6000-7c46-43f8-96dc-b4cdd73a3c3d/0/0/",
    "https://catalog.churchofjesuschrist.org/assets/f31d9966-d1c4-4410-8143-66b0476ce7ac/0/0/",
    "https://catalog.churchofjesuschrist.org/assets/ba6fca45-f605-42a7-b5c0-0049054dbd8a/0/0/",
    "https://catalog.churchofjesuschrist.org/assets/9614cc81-a934-4ed6-9ea5-595a61e3f922/0/0/",
    "https://catalog.churchofjesuschrist.org/assets/c708e33c-674a-4c6f-873d-c3a696e8253f/0/0/",
    "https://catalog.churchofjesuschrist.org/assets/6286cf4d-43e3-4243-94f5-eeb8108b85d0/0/0/",
    "https://catalog.churchofjesuschrist.org/assets/55e51751-713c-400e-9daf-be06604138dd/0/0/",
    // Joseph F. Merrill
    "https://catalog.churchofjesuschrist.org/assets/8ed4354a-c05d-48ac-a5bd-29a2d27166fe/0/0/",
    // Joseph Fielding Smith
    "https://catalog.churchofjesuschrist.org/assets/2307a85b-4b54-4bfb-9552-d55e3df4735a/0/0/",
    "https://catalog.churchofjesuschrist.org/assets/d6940519-279e-47ee-ae6d-ccae93737dfa/0/0/",
    "https://www.churchofjesuschrist.org/study/general-conference/1971/10/i-know-that-my-redeemer-liveth?lang=eng",
    // Joseph L. Wirthlin
    "https://catalog.churchofjesuschrist.org/assets/87d452da-f2e7-4407-a4ec-a5328dd13ed2/0/0/",
    "https://catalog.churchofjesuschrist.org/assets/93c1a0a9-b6b8-4bc6-943a-d1251bcf25db/0/0/",
    // John Andreas Widtsoe
    "https://catalog.churchofjesuschrist.org/assets/8069a871-bf56-42cb-bd93-5dac8c191bd6/0/0/",
    "https://catalog.churchofjesuschrist.org/assets/bb505272-0471-4d6f-93ce-1f0701e275e7/0/0/",
    // LeGrand Richards
    "https://catalog.churchofjesuschrist.org/assets/9e06a103-6a6a-40d8-8c39-cadcce9656dc/0/0/",
    "https://catalog.churchofjesuschrist.org/assets/d10ebd01-512d-4067-90ab-b047b9288851/0/0/",
    "https://www.churchofjesuschrist.org/study/general-conference/1981/04/call-of-the-prophets?lang=eng",
    // Marion G. Romney
    "https://catalog.churchofjesuschrist.org/assets/b1d4139e-0053-4ff8-9ff8-6f1c74e67e49/0/0/",
    "https://catalog.churchofjesuschrist.org/assets/1ad10350-91f7-4c3e-b7b8-70891b58e6cd/0/0/",
    "https://www.churchofjesuschrist.org/study/general-conference/1974/10/how-men-are-saved?lang=eng",
    // Mark E. Petersen
    "https://catalog.churchofjesuschrist.org/assets/1ec48723-eb6b-448e-bf31-c817bc347a2d/0/0/",
    "https://catalog.churchofjesuschrist.org/assets/4c3160ea-7ec5-44f6-8e77-60b6b7d2560e/0/0/",
    // Marvin J. Ashton
    "https://speeches.byu.edu/talks/marvin-j-ashton/murmur-not/",
    "https://www.churchofjesuschrist.org/study/general-conference/1971/04/love-of-the-right?lang=eng",
    "https://www.churchofjesuschrist.org/study/general-conference/1971/10/you-can-get-there-from-here?lang=eng",
    "https://www.churchofjesuschrist.org/study/general-conference/1972/04/what-is-your-destination?lang=eng",
    "https://www.churchofjesuschrist.org/study/general-conference/1972/10/what-is-a-friend?lang=eng",
    "https://speeches.byu.edu/talks/marvin-j-ashton/patience-great-power/",
    "https://www.churchofjesuschrist.org/study/general-conference/1973/04/in-his-strength?lang=eng",
    "https://www.churchofjesuschrist.org/study/general-conference/1973/10/he-took-him-by-the-hand?lang=eng",
    "https://www.churchofjesuschrist.org/study/general-conference/1974/04/a-time-of-urgency?lang=eng",
    "https://www.churchofjesuschrist.org/study/general-conference/1974/10/whos-losing?lang=eng",
    "https://speeches.byu.edu/talks/marvin-j-ashton/shall/",
    "https://www.churchofjesuschrist.org/study/general-conference/1975/04/the-time-is-now?lang=eng",
    "https://www.churchofjesuschrist.org/study/general-conference/1975/10/love-takes-time?lang=eng",
    "https://www.churchofjesuschrist.org/study/general-conference/1976/04/family-communications?lang=eng",
    "https://speeches.byu.edu/talks/marvin-j-ashton/appreciation-sign-maturity/",
    "https://www.churchofjesuschrist.org/study/general-conference/1976/10/proper-self-management?lang=eng",
    "https://speeches.byu.edu/talks/marvin-j-ashton/family-home-storage/",
    "https://www.churchofjesuschrist.org/study/general-conference/1977/04/the-power-of-plainness?lang=eng",
    "https://www.churchofjesuschrist.org/study/general-conference/1977/10/rated-a?lang=eng",
    "https://speeches.byu.edu/talks/marvin-j-ashton/n-eldon-tanner-example-follow/",
    "https://www.churchofjesuschrist.org/study/general-conference/1978/04/no-time-for-contention?lang=eng",
    "https://www.churchofjesuschrist.org/study/general-conference/1978/10/who-will-forfeit-the-harvest?lang=eng",
    "https://www.churchofjesuschrist.org/study/general-conference/1979/04/roadblocks-to-progress?lang=eng",
    "https://www.churchofjesuschrist.org/study/general-conference/1979/10/progress-through-change",
    "https://www.churchofjesuschrist.org/study/general-conference/1980/04/the-prophet-and-the-prison",
    "https://www.churchofjesuschrist.org/study/general-conference/1980/10/adversity-and-you",
    "https://www.churchofjesuschrist.org/study/general-conference/1981/04/we-serve-that-which-we-love",
    "https://www.churchofjesuschrist.org/study/general-conference/1981/10/give-with-wisdom-that-they-may-receive-with-dignity",
    "https://speeches.byu.edu/talks/marvin-j-ashton/fun-poor/",
    "https://www.churchofjesuschrist.org/study/general-conference/1982/04/this-is-no-harm",
    "https://www.churchofjesuschrist.org/study/general-conference/1982/10/pure-religion",
    "https://www.churchofjesuschrist.org/study/general-conference/1983/04/straightway",
    "https://www.churchofjesuschrist.org/study/general-conference/1983/10/the-word-is-commitment",
    "https://www.churchofjesuschrist.org/study/general-conference/1984/04/choose-the-good-part",
    "https://www.churchofjesuschrist.org/study/general-conference/1984/10/if-thou-endure-it-well",
    "https://speeches.byu.edu/talks/marvin-j-ashton/personal-ranking/",
    "https://www.churchofjesuschrist.org/study/general-conference/1985/04/spencer-w-kimball-a-true-disciple-of-christ",
    "https://www.churchofjesuschrist.org/study/general-conference/1985/10/peace-a-triumph-of-principles",
    "https://www.churchofjesuschrist.org/study/general-conference/1986/04/be-of-good-cheer",
    "https://www.churchofjesuschrist.org/study/general-conference/1986/10/shake-off-the-chains-with-which-ye-are-bound",
    "https://www.churchofjesuschrist.org/study/general-conference/1987/04/i-am-an-adult-now",
    "https://speeches.byu.edu/talks/marvin-j-ashton/carry-cross/",
    "https://www.churchofjesuschrist.org/study/general-conference/1987/10/there-are-many-gifts?lang=eng",
    "https://www.churchofjesuschrist.org/study/general-conference/1988/04/while-they-are-waiting",
    "https://speeches.byu.edu/talks/marvin-j-ashton/lessons-master/",
    "https://www.churchofjesuschrist.org/study/general-conference/1988/10/the-measure-of-our-hearts",
    "https://speeches.byu.edu/talks/marvin-j-ashton/loveth-right/",
    "https://www.churchofjesuschrist.org/study/general-conference/1989/04/on-being-worthy",
    "https://speeches.byu.edu/talks/marvin-j-ashton/1989-spring-commencement-address/",
    "https://www.churchofjesuschrist.org/study/general-conference/1989/10/stalwart-and-brave-we-stand",
    "https://speeches.byu.edu/talks/marvin-j-ashton/still-voice-perfect-mildness/",
    "https://www.churchofjesuschrist.org/study/general-conference/1990/04/neither-boast-of-faith-nor-of-mighty-works",
    "https://www.churchofjesuschrist.org/study/general-conference/1990/10/a-pattern-in-all-things",
    "https://www.churchofjesuschrist.org/study/general-conference/1991/04/a-voice-of-gladness",
    "https://speeches.byu.edu/talks/marvin-j-ashton/everything-give-thanks/",
    "https://www.churchofjesuschrist.org/study/general-conference/1991/10/strengthen-the-feeble-knees",
    "https://www.churchofjesuschrist.org/study/general-conference/1992/04/the-tongue-can-be-a-sharp-sword",
    "https://speeches.byu.edu/talks/marvin-j-ashton/teaching-mentoring-things-spirit/",
    "https://www.churchofjesuschrist.org/study/general-conference/1992/10/a-yearning-for-home",
    "https://speeches.byu.edu/talks/marvin-j-ashton/know-2/",
    // Matthew Cowley
    "https://catalog.churchofjesuschrist.org/assets/6fab722f-8670-4253-a354-4f33fc4b9fb2/0/0/",
    "https://catalog.churchofjesuschrist.org/assets/7e40e39f-fb93-4dad-acc4-cda8074ffc6e/0/0/",
    // Neil A. Maxwell
    "https://speeches.byu.edu/talks/neal-a-maxwell/if-thou-endure-well/",
    // Richard L. Evans
    "https://www.churchofjesuschrist.org/study/general-conference/1971/04/where-are-you-really-going?lang=eng",
    "https://catalog.churchofjesuschrist.org/assets/bcfeded4-6bf4-4247-b1ea-df40f9703cbb/0/0/",
    "https://catalog.churchofjesuschrist.org/assets/e4970420-0372-4dd5-8f02-9c90981c718a/0/0/",
    "https://catalog.churchofjesuschrist.org/assets/022b30a9-a575-43da-beb4-1fbc9b085cc9/0/0/",
    "https://www.churchofjesuschrist.org/study/general-conference/1971/10/should-the-commandments-be-rewritten?lang=eng",
    // Spencer W. Kimball
    "https://catalog.churchofjesuschrist.org/assets/3be11788-3a7e-434c-91bf-99cc8658850d/0/0/",
    "https://catalog.churchofjesuschrist.org/assets/f0db5ac8-9fea-494b-8b42-c0cc5c3acfa6/0/0/",
    // Stephen L Richards
    "https://catalog.churchofjesuschrist.org/assets/6c493dea-86e7-429c-b6bb-47f01e2ab0ed/0/0/",
    "https://catalog.churchofjesuschrist.org/assets/88acd350-89cd-488a-a98d-ccb066a28548/0/0/",
    "https://catalog.churchofjesuschrist.org/assets/1c6c86a9-ff6f-4f05-aa07-c5787b4fcbdd/0/0/",
    "https://catalog.churchofjesuschrist.org/assets/ae40a7d3-426c-452d-b4fa-d557f7aaf69d/0/0/",
    "https://catalog.churchofjesuschrist.org/assets/3778594d-99e5-49ee-ae73-d45c43105035/0/0/",
    "https://catalog.churchofjesuschrist.org/assets/b1aebc77-fd1b-4779-abce-f6ad0c56ea29/0/0/",
    "https://catalog.churchofjesuschrist.org/assets/537bcc94-1a97-40de-8872-0e157518fbc1/0/0/",
    "https://catalog.churchofjesuschrist.org/assets/7e18fef2-94e9-40c2-94f7-9dcbc2927dd9/0/0/",
    "https://catalog.churchofjesuschrist.org/assets/4339f549-d3fc-4e26-b4d5-c5f5a89f1735/0/0/",
    // Thorpe B. Isaacson
    "https://catalog.churchofjesuschrist.org/assets/0769b2fb-581f-4638-ba10-e3688c3a7f1a/0/0/",

    // Custom / additional talks (deduplicated)
    "https://catalog.churchofjesuschrist.org/assets/d47c4ff3-6e5b-4d4e-87a4-efd2617fa45b/0/0?lang=eng",
    "https://catalog.churchofjesuschrist.org/assets/54373712-0a15-4023-8fcc-051c9c84f9b5/0/0?lang=eng",
    "https://speeches.byu.edu/talks/john-a-widtsoe/four-cornerstones-build-greatness/",
    "https://speeches.byu.edu/talks/spencer-w-kimball/value-testimony-2/",
    "https://speeches.byu.edu/talks/joseph-fielding-smith/law-divine-witnesses/",
    "https://speeches.byu.edu/talks/albert-e-bowen/true-christianity-ideal-humanity/",
    "https://speeches.byu.edu/talks/john-a-widtsoe/your-living-testimony/",
    "https://speeches.byu.edu/talks/ezra-taft-benson/message-world/",
    "https://speeches.byu.edu/talks/george-albert-smith/devotional-george-albert-smith-1950/",
    "https://speeches.byu.edu/talks/legrand-richards/leadership/",
    "https://speeches.byu.edu/talks/harold-b-lee/1950-devotional/",
    "https://speeches.byu.edu/talks/henry-d-moyle/protecting-political-freedom/",
    "https://speeches.byu.edu/talks/spencer-w-kimball/style/",
    "https://speeches.byu.edu/talks/david-o-mckay/eternal-truth-will-guide-us/",
    "https://speeches.byu.edu/talks/harold-b-lee/life-control/",
    "https://speeches.byu.edu/talks/joseph-fielding-smith/divine-witnesses/",
    "https://speeches.byu.edu/talks/j-reuben-clark/godhead/",
    "https://speeches.byu.edu/talks/spencer-w-kimball/shall-marry/",
    "https://speeches.byu.edu/talks/harold-b-lee/men-women-tomorrow-depends-upon/",
    "https://speeches.byu.edu/talks/ezra-taft-benson/growth-church/",
    "https://speeches.byu.edu/talks/joseph-fielding-smith/leadership-week-fulfillment-prophecy/",
    "https://speeches.byu.edu/talks/stephen-l-richards/leadership-week-devotional/",
    "https://speeches.byu.edu/talks/david-o-mckay/message-lds-college-youth/",
    "https://speeches.byu.edu/talks/george-q-morris/august-1952-commencement/",
    "https://speeches.byu.edu/talks/matthew-cowley/follow-oracle-god/",
    "https://speeches.byu.edu/talks/harold-b-lee/divine-revelation/",
    "https://speeches.byu.edu/talks/delbert-l-stapley/honesty-integrity-2/",
    "https://speeches.byu.edu/talks/richard-l-evans/be-thankful/",
    "https://speeches.byu.edu/talks/ezra-taft-benson/lds-church-politics/",
    "https://speeches.byu.edu/talks/george-q-morris/importance-of-habits/",
    "https://speeches.byu.edu/talks/matthew-cowley/achievement/",
    "https://speeches.byu.edu/talks/matthew-cowley/learning-live-simply/",
    "https://speeches.byu.edu/talks/matthew-cowley/miracles/",
    "https://speeches.byu.edu/talks/matthew-cowley/put-hand-hand-god/",
    "https://speeches.byu.edu/talks/matthew-cowley/learning-live-better-use-vocational-opportunities/",
    "https://speeches.byu.edu/talks/george-q-morris/church-doctrines/",
    "https://speeches.byu.edu/talks/george-q-morris/be-the-best-you-know-how/",
    "https://speeches.byu.edu/talks/george-q-morris/foundation-of-revealed-truth/",
    "https://speeches.byu.edu/talks/george-q-morris/will-pass-the-test/",
];

// ---- General Conference session list (used for the "Weekly Conference" link) ----
const conferenceList = [
    "https://catalog.churchofjesuschrist.org/record/2b8598d8-cb11-4dc0-940b-bf84d68f85e5/27e55dd0-d8ae-4ffb-91c3-7d68a6dce4ad?view=browse&lang=eng", // April 1936
    "https://catalog.churchofjesuschrist.org/record/2b8598d8-cb11-4dc0-940b-bf84d68f85e5/9d2a13c6-9814-4c72-95a0-cabcf2ce5f84?view=browse&lang=eng", // October 1936
    "https://catalog.churchofjesuschrist.org/record/2b8598d8-cb11-4dc0-940b-bf84d68f85e5/9f283d32-b272-485e-b2fc-751cf52ee968?view=browse&lang=eng", // April 1938
    "https://catalog.churchofjesuschrist.org/record/2b8598d8-cb11-4dc0-940b-bf84d68f85e5/e8d640ce-5ebb-4997-ad7d-b47703c8f83b?view=browse&lang=eng", // October 1938
    "https://catalog.churchofjesuschrist.org/record/2b8598d8-cb11-4dc0-940b-bf84d68f85e5/82bcf61b-112f-49d4-95f0-dcbe78973541?view=browse&lang=eng", // April 1939
    "https://catalog.churchofjesuschrist.org/record/2b8598d8-cb11-4dc0-940b-bf84d68f85e5/e50146ae-a088-4644-9161-40b4722bdbfe?view=browse&lang=eng", // October 1939
    "https://catalog.churchofjesuschrist.org/record/2b8598d8-cb11-4dc0-940b-bf84d68f85e5/dade69d3-0016-416e-8bf0-d69f8225cece?view=browse&lang=eng", // April 1940
    "https://catalog.churchofjesuschrist.org/record/2b8598d8-cb11-4dc0-940b-bf84d68f85e5/9cb47807-9569-4977-afd7-8284ed79d99d?view=browse&lang=eng", // October 1940
    "https://catalog.churchofjesuschrist.org/record/2b8598d8-cb11-4dc0-940b-bf84d68f85e5/c69ac0fe-407a-4ccf-a623-267b063c489e?view=browse&lang=eng", // April 1941
    "https://catalog.churchofjesuschrist.org/record/2b8598d8-cb11-4dc0-940b-bf84d68f85e5/6ef6741b-3450-4279-a58b-f15a03ee5411?view=browse&lang=eng", // October 1941
    "https://catalog.churchofjesuschrist.org/record/2b8598d8-cb11-4dc0-940b-bf84d68f85e5/e586f29b-c653-4ab6-92a5-82e1139a9ff0?view=browse&lang=eng", // April 1942
    "https://catalog.churchofjesuschrist.org/record/2b8598d8-cb11-4dc0-940b-bf84d68f85e5/813bc00f-931f-4ef0-9a94-c9bb77e4fc68?view=browse&lang=eng", // October 1942
    "https://catalog.churchofjesuschrist.org/record/2b8598d8-cb11-4dc0-940b-bf84d68f85e5/50d80f59-0f71-45bd-a005-dfc0d9eede71?view=browse&lang=eng", // April 1943
    "https://catalog.churchofjesuschrist.org/record/2b8598d8-cb11-4dc0-940b-bf84d68f85e5/2c01eb87-7945-406b-899b-54c32a1ca717?view=browse&lang=eng", // October 1943
    "https://catalog.churchofjesuschrist.org/record/2b8598d8-cb11-4dc0-940b-bf84d68f85e5/8596a341-05fb-4ec5-8fc5-c98417b27be4?view=browse&lang=eng", // April 1944
    "https://catalog.churchofjesuschrist.org/record/2b8598d8-cb11-4dc0-940b-bf84d68f85e5/3071e7fd-14ea-4259-ae27-0f0ddeedc132?view=browse&lang=eng", // October 1944
    "https://catalog.churchofjesuschrist.org/record/2b8598d8-cb11-4dc0-940b-bf84d68f85e5/96fe6682-f47d-433a-837a-2c91a7ca0f73?view=browse&lang=eng", // April 1945
    "https://catalog.churchofjesuschrist.org/record/2b8598d8-cb11-4dc0-940b-bf84d68f85e5/907831ee-a14d-416a-a62d-05ef3727b659?view=browse&lang=eng", // October 1945
    "https://catalog.churchofjesuschrist.org/record/2b8598d8-cb11-4dc0-940b-bf84d68f85e5/86bb779d-7429-4f61-a09c-edfc63d80e43?view=browse&lang=eng", // April 1946
    "https://catalog.churchofjesuschrist.org/record/2b8598d8-cb11-4dc0-940b-bf84d68f85e5/61483ebd-7cc0-49be-970c-d5bb6c606afe?view=browse&lang=eng", // October 1946
    "https://catalog.churchofjesuschrist.org/record/2b8598d8-cb11-4dc0-940b-bf84d68f85e5/2e1f5f52-b685-4ddd-9716-af6822cc7f03?view=browse&lang=eng", // April 1947
    "https://catalog.churchofjesuschrist.org/record/2b8598d8-cb11-4dc0-940b-bf84d68f85e5/c052fe54-d232-4821-b502-08098d3b2996?view=browse&lang=eng", // October 1947
    "https://catalog.churchofjesuschrist.org/record/2b8598d8-cb11-4dc0-940b-bf84d68f85e5/6901d888-4505-42e1-be01-558ae92c0616?view=browse&lang=eng", // April 1948
    "https://catalog.churchofjesuschrist.org/record/2b8598d8-cb11-4dc0-940b-bf84d68f85e5/1d430dab-8110-4b8b-b55e-40c4683f45d8?view=browse&lang=eng", // October 1948
    "https://catalog.churchofjesuschrist.org/record/2b8598d8-cb11-4dc0-940b-bf84d68f85e5/fa84f43e-ed9d-46e9-937b-8529f87096ac?view=browse&lang=eng", // April 1949
];

// ---- Feature: Daily Sermon (picks a link based on the day of the year) ----
function initDailySermon() {
    const linkElement = document.getElementById("daily-sermon-link");
    if (!linkElement) return;

    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);

    linkElement.href = sermonList[dayOfYear % sermonList.length];
}

// ---- Feature: Find a Sermon (random talk, opened in a new tab) ----
function findSermon() {
    const randomIndex = Math.floor(Math.random() * sermonList.length);
    window.open(sermonList[randomIndex], "_blank");
}

// ---- Feature: Weekly Conference (picks a session based on the week of the year) ----
function initWeeklyConference() {
    const linkElement = document.getElementById("weekly-conference-link");
    if (!linkElement) return;

    const now = new Date();
    const oneJan = new Date(now.getFullYear(), 0, 1);
    const days = Math.floor((now - oneJan) / (24 * 60 * 60 * 1000));
    const weekOfYear = Math.ceil((days + oneJan.getDay() + 1) / 7);

    linkElement.href = conferenceList[weekOfYear % conferenceList.length];
}

document.addEventListener("DOMContentLoaded", function () {
    initDailySermon();
    initWeeklyConference();
});