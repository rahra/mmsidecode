/*! This code contains a list of MIDs (maritime identification digits) as found
 * in an MMSI number. The decoder works according to https://en.wikipedia.org/wiki/Maritime_Mobile_Service_Identity#cite_note-ausmsa-6
 * The content of this page was veryfied within http://www.itu.int/rec/R-REC-M.585-4-200703-S/en
 * The list of MIDs is taken from here https://www.itu.int/en/ITU-R/terrestrial/fmd/Pages/mid.aspx
 * The list of country codes is taken from here https://www.iso.org/obp/ui/
 *
 * The list within this code was manually compiled, so it may contain errors.
 *
 * \author Bernhard R. Fischer <bf@abenteuerland.at>
 * \date 2023/09/04
 * \version 1.0
 */

/*! Error conditions */
const EMID =
{
   ILLLEN: {mid: -1, name: "illegal MMSI length", code: ""},
   ILLCHR: {mid: -2, name: "illegal characters in MMSI string", code: ""},
   UNKNWN: {mid: -3, name: "MID unknown", code: ""},
   DECERR: {mid: -4, name: "could not decode", code: ""}
};

/*! MID/country list */
const midlist_ =
[
   {"mid": 401, "name": "Afghanistan", "code": "AF"},
   {"mid": 201, "name": "Albania (Republic of)", "code": "AL"},
   {"mid": 605, "name": "Algeria (People's Democratic Republic of)", "code": "DZ"},
   {"mid": 202, "name": "Andorra (Principality of)", "code": "AD"},
   {"mid": 603, "name": "Angola (Republic of)", "code": "AO"},
   {"mid": 304, "name": "Antigua and Barbuda", "code": "AG"},
   {"mid": 305, "name": "Antigua and Barbuda", "code": "AG"},
   {"mid": 701, "name": "Argentine Republic", "code": "AR"},
   {"mid": 216, "name": "Armenia (Republic of)", "code": "AM"},
   {"mid": 503, "name": "Australia", "code": "AU"},
   {"mid": 516, "name": "Australia - Christmas Island (Indian Ocean)", "code": "CX"},
   {"mid": 523, "name": "Australia - Cocos (Keeling) Islands", "code": "CC"},
   {"mid": 203, "name": "Austria", "code": "AT"},
   {"mid": 423, "name": "Azerbaijan (Republic of)", "code": "AZ"},
   {"mid": 308, "name": "Bahamas (Commonwealth of the)", "code": "BS"},
   {"mid": 309, "name": "Bahamas (Commonwealth of the)", "code": "BS"},
   {"mid": 311, "name": "Bahamas (Commonwealth of the)", "code": "BS"},
   {"mid": 408, "name": "Bahrain (Kingdom of)", "code": "BH"},
   {"mid": 405, "name": "Bangladesh (People's Republic of)", "code": "BD"},
   {"mid": 314, "name": "Barbados", "code": "BB"},
   {"mid": 206, "name": "Belarus (Republic of)", "code": "BY"},
   {"mid": 205, "name": "Belgium", "code": "BE"},
   {"mid": 312, "name": "Belize", "code": "BZ"},
   {"mid": 610, "name": "Benin (Republic of)", "code": "BJ"},
   {"mid": 410, "name": "Bhutan (Kingdom of)", "code": "BT"},
   {"mid": 720, "name": "Bolivia (Plurinational State of)", "code": "BO"},
   {"mid": 478, "name": "Bosnia and Herzegovina", "code": "BA"},
   {"mid": 611, "name": "Botswana (Republic of)", "code": "BW"},
   {"mid": 710, "name": "Brazil (Federative Republic of)", "code": "BR"},
   {"mid": 508, "name": "Brunei Darussalam", "code": "BN"},
   {"mid": 207, "name": "Bulgaria (Republic of)", "code": "BG"},
   {"mid": 633, "name": "Burkina Faso", "code": "BF"},
   {"mid": 609, "name": "Burundi (Republic of)", "code": "BI"},
   {"mid": 617, "name": "Cabo Verde (Republic of)", "code": "CV"},
   {"mid": 514, "name": "Cambodia (Kingdom of)", "code": "KH"},
   {"mid": 515, "name": "Cambodia (Kingdom of)", "code": "KH"},
   {"mid": 613, "name": "Cameroon (Republic of)", "code": "CM"},
   {"mid": 316, "name": "Canada", "code": "CA"},
   {"mid": 612, "name": "Central African Republic", "code": "CF"},
   {"mid": 670, "name": "Chad (Republic of)", "code": "TD"},
   {"mid": 725, "name": "Chile", "code": "CL"},
   {"mid": 412, "name": "China (People's Republic of)", "code": "CN"},
   {"mid": 413, "name": "China (People's Republic of)", "code": "CN"},
   {"mid": 414, "name": "China (People's Republic of)", "code": "CN"},
   {"mid": 477, "name": "China (People's Republic of) - Hong Kong (Special Administrative Region of China)", "code": "HK"},
   {"mid": 453, "name": "China (People's Republic of) - Macao (Special Administrative Region of China)", "code": "MO"},
   {"mid": 416, "name": "China (People's Republic of) - Taiwan (Province of China)", "code": "TW"},
   {"mid": 730, "name": "Colombia (Republic of)", "code": "CO"},
   {"mid": 616, "name": "Comoros (Union of the)", "code": "KM"},
   {"mid": 620, "name": "Comoros (Union of the)", "code": "KM"},
   {"mid": 615, "name": "Congo (Republic of the)", "code": "CG"},
   {"mid": 321, "name": "Costa Rica", "code": "CR"},
   {"mid": 619, "name": "Côte d'Ivoire (Republic of)", "code": "CI"},
   {"mid": 238, "name": "Croatia (Republic of)", "code": "HR"},
   {"mid": 323, "name": "Cuba", "code": "CU"},
   {"mid": 209, "name": "Cyprus (Republic of)", "code": "CY"},
   {"mid": 210, "name": "Cyprus (Republic of)", "code": "CY"},
   {"mid": 212, "name": "Cyprus (Republic of)", "code": "CY"},
   {"mid": 270, "name": "Czech Republic", "code": "CZ"},
   {"mid": 445, "name": "Democratic People's Republic of Korea", "code": "KP"},
   {"mid": 676, "name": "Democratic Republic of the Congo", "code": "CD"},
   {"mid": 219, "name": "Denmark", "code": "DK"},
   {"mid": 220, "name": "Denmark", "code": "DK"},
   {"mid": 231, "name": "Denmark - Faroe Islands", "code": "FO"},
   {"mid": 331, "name": "Denmark - Greenland", "code": "GL"},
   {"mid": 621, "name": "Djibouti (Republic of)", "code": "DJ"},
   {"mid": 325, "name": "Dominica (Commonwealth of)", "code": "DM"},
   {"mid": 327, "name": "Dominican Republic", "code": "DO"},
   {"mid": 735, "name": "Ecuador", "code": "EC"},
   {"mid": 622, "name": "Egypt (Arab Republic of)", "code": "EG"},
   {"mid": 359, "name": "El Salvador (Republic of)", "code": "SV"},
   {"mid": 631, "name": "Equatorial Guinea (Republic of)", "code": "GQ"},
   {"mid": 625, "name": "Eritrea", "code": "ER"},
   {"mid": 276, "name": "Estonia (Republic of)", "code": "EE"},
   {"mid": 669, "name": "Eswatini (Kingdom of)", "code": ""},
   {"mid": 624, "name": "Ethiopia (Federal Democratic Republic of)", "code": "ET"},
   {"mid": 520, "name": "Fiji (Republic of)", "code": "FJ"},
   {"mid": 230, "name": "Finland", "code": "FI"},
   {"mid": 226, "name": "France", "code": "FR"},
   {"mid": 227, "name": "France", "code": "FR"},
   {"mid": 228, "name": "France", "code": "FR"},
   {"mid": 501, "name": "France - Adelie Land", "code": "FR"},
   {"mid": 618, "name": "France - Crozet Archipelago", "code": "FR"},
   {"mid": 546, "name": "France - French Polynesia", "code": "PF"},
   {"mid": 329, "name": "France - Guadeloupe (French Department of)", "code": "FR"},
   {"mid": 745, "name": "France - Guiana (French Department of)", "code": "FR"},
   {"mid": 635, "name": "France - Kerguelen Islands", "code": "FR"},
   {"mid": 347, "name": "France - Martinique (French Department of)", "code": "FR"},
   {"mid": 540, "name": "France - New Caledonia", "code": "NC"},
   {"mid": 660, "name": "France - Reunion (French Department of)", "code": "RE"},
   {"mid": 607, "name": "France - Saint Paul and Amsterdam Islands", "code": "FR"},
   {"mid": 361, "name": "France - Saint Pierre and Miquelon (Territorial Collectivity of)", "code": "PM"},
   {"mid": 578, "name": "France - Wallis and Futuna Islands", "code": "WF"},
   {"mid": 626, "name": "Gabonese Republic", "code": "GA"},
   {"mid": 629, "name": "Gambia (Republic of the)", "code": "GM"},
   {"mid": 213, "name": "Georgia", "code": "GE"},
   {"mid": 211, "name": "Germany (Federal Republic of)", "code": "DE"},
   {"mid": 218, "name": "Germany (Federal Republic of)", "code": "DE"},
   {"mid": 627, "name": "Ghana", "code": "GH"},
   {"mid": 237, "name": "Greece", "code": "GR"},
   {"mid": 239, "name": "Greece", "code": "GR"},
   {"mid": 240, "name": "Greece", "code": "GR"},
   {"mid": 241, "name": "Greece", "code": "GR"},
   {"mid": 330, "name": "Grenada", "code": "GD"},
   {"mid": 332, "name": "Guatemala (Republic of)", "code": "GT"},
   {"mid": 632, "name": "Guinea (Republic of)", "code": "GN"},
   {"mid": 630, "name": "Guinea-Bissau (Republic of)", "code": "GW"},
   {"mid": 750, "name": "Guyana", "code": "GY"},
   {"mid": 336, "name": "Haiti (Republic of)", "code": "HT"},
   {"mid": 334, "name": "Honduras (Republic of)", "code": "HN"},
   {"mid": 243, "name": "Hungary", "code": "HU"},
   {"mid": 251, "name": "Iceland", "code": "IS"},
   {"mid": 419, "name": "India (Republic of)", "code": "IN"},
   {"mid": 525, "name": "Indonesia (Republic of)", "code": "ID"},
   {"mid": 422, "name": "Iran (Islamic Republic of)", "code": "IR"},
   {"mid": 425, "name": "Iraq (Republic of)", "code": "IQ"},
   {"mid": 250, "name": "Ireland", "code": "IE"},
   {"mid": 428, "name": "Israel (State of)", "code": "IL"},
   {"mid": 247, "name": "Italy", "code": "IT"},
   {"mid": 339, "name": "Jamaica", "code": "JM"},
   {"mid": 431, "name": "Japan", "code": "JP"},
   {"mid": 432, "name": "Japan", "code": "JP"},
   {"mid": 438, "name": "Jordan (Hashemite Kingdom of)", "code": "JO"},
   {"mid": 436, "name": "Kazakhstan (Republic of)", "code": "KZ"},
   {"mid": 634, "name": "Kenya (Republic of)", "code": "KE"},
   {"mid": 529, "name": "Kiribati (Republic of)", "code": "KI"},
   {"mid": 440, "name": "Korea (Republic of)", "code": "KR"},
   {"mid": 441, "name": "Korea (Republic of)", "code": "KR"},
   {"mid": 447, "name": "Kuwait (State of)", "code": "KW"},
   {"mid": 451, "name": "Kyrgyz Republic", "code": "KG"},
   {"mid": 531, "name": "Lao People's Democratic Republic", "code": "LA"},
   {"mid": 275, "name": "Latvia (Republic of)", "code": "LV"},
   {"mid": 450, "name": "Lebanon", "code": "LB"},
   {"mid": 644, "name": "Lesotho (Kingdom of)", "code": "LS"},
   {"mid": 636, "name": "Liberia (Republic of)", "code": "LR"},
   {"mid": 637, "name": "Liberia (Republic of)", "code": "LR"},
   {"mid": 642, "name": "Libya (State of)", "code": "LY"},
   {"mid": 252, "name": "Liechtenstein (Principality of)", "code": "LI"},
   {"mid": 277, "name": "Lithuania (Republic of)", "code": "LT"},
   {"mid": 253, "name": "Luxembourg", "code": "LU"},
   {"mid": 647, "name": "Madagascar (Republic of)", "code": "MG"},
   {"mid": 655, "name": "Malawi", "code": "MW"},
   {"mid": 533, "name": "Malaysia", "code": "MY"},
   {"mid": 455, "name": "Maldives (Republic of)", "code": "MV"},
   {"mid": 649, "name": "Mali (Republic of)", "code": "ML"},
   {"mid": 215, "name": "Malta", "code": "MT"},
   {"mid": 229, "name": "Malta", "code": "MT"},
   {"mid": 248, "name": "Malta", "code": "MT"},
   {"mid": 249, "name": "Malta", "code": "MT"},
   {"mid": 256, "name": "Malta", "code": "MT"},
   {"mid": 538, "name": "Marshall Islands (Republic of the)", "code": "MH"},
   {"mid": 654, "name": "Mauritania (Islamic Republic of)", "code": "MR"},
   {"mid": 645, "name": "Mauritius (Republic of)", "code": "MU"},
   {"mid": 345, "name": "Mexico", "code": "MX"},
   {"mid": 510, "name": "Micronesia (Federated States of)", "code": "FM"},
   {"mid": 214, "name": "Moldova (Republic of)", "code": "MD"},
   {"mid": 254, "name": "Monaco (Principality of)", "code": "MC"},
   {"mid": 457, "name": "Mongolia", "code": "MN"},
   {"mid": 262, "name": "Montenegro", "code": "ME"},
   {"mid": 242, "name": "Morocco (Kingdom of)", "code": "MA"},
   {"mid": 650, "name": "Mozambique (Republic of)", "code": "MZ"},
   {"mid": 506, "name": "Myanmar (Union of)", "code": "MM"},
   {"mid": 659, "name": "Namibia (Republic of)", "code": "NA"},
   {"mid": 544, "name": "Nauru (Republic of)", "code": "NR"},
   {"mid": 459, "name": "Nepal (Federal Democratic Republic of)", "code": "NP"},
   {"mid": 244, "name": "Netherlands (Kingdom of the)", "code": "NL"},
   {"mid": 245, "name": "Netherlands (Kingdom of the)", "code": "NL"},
   {"mid": 246, "name": "Netherlands (Kingdom of the)", "code": "NL"},
   {"mid": 307, "name": "Netherlands (Kingdom of the) - Aruba", "code": "AW"},
   {"mid": 306, "name": "Netherlands (Kingdom of the) - Bonaire, Sint Eustatius and Saba", "code": "NL"},
   {"mid": 306, "name": "Netherlands (Kingdom of the) - Curaçao", "code": "CW"},
   {"mid": 306, "name": "Netherlands (Kingdom of the) - Sint Maarten (Dutch part)", "code": "SX"},
   {"mid": 512, "name": "New Zealand", "code": "NZ"},
   {"mid": 518, "name": "New Zealand - Cook Islands", "code": "CK"},
   {"mid": 542, "name": "New Zealand - Niue", "code": "NU"},
   {"mid": 350, "name": "Nicaragua", "code": "NI"},
   {"mid": 656, "name": "Niger (Republic of the)", "code": "NE"},
   {"mid": 657, "name": "Nigeria (Federal Republic of)", "code": "NG"},
   {"mid": 274, "name": "North Macedonia (Republic of)", "code": "MK"},
   {"mid": 257, "name": "Norway", "code": "NO"},
   {"mid": 258, "name": "Norway", "code": "NO"},
   {"mid": 259, "name": "Norway", "code": "NO"},
   {"mid": 461, "name": "Oman (Sultanate of)", "code": "OM"},
   {"mid": 463, "name": "Pakistan (Islamic Republic of)", "code": "PK"},
   {"mid": 511, "name": "Palau (Republic of)", "code": "PW"},
   {"mid": 351, "name": "Panama (Republic of)", "code": "PA"},
   {"mid": 352, "name": "Panama (Republic of)", "code": "PA"},
   {"mid": 353, "name": "Panama (Republic of)", "code": "PA"},
   {"mid": 354, "name": "Panama (Republic of)", "code": "PA"},
   {"mid": 355, "name": "Panama (Republic of)", "code": "PA"},
   {"mid": 356, "name": "Panama (Republic of)", "code": "PA"},
   {"mid": 357, "name": "Panama (Republic of)", "code": "PA"},
   {"mid": 370, "name": "Panama (Republic of)", "code": "PA"},
   {"mid": 371, "name": "Panama (Republic of)", "code": "PA"},
   {"mid": 372, "name": "Panama (Republic of)", "code": "PA"},
   {"mid": 373, "name": "Panama (Republic of)", "code": "PA"},
   {"mid": 374, "name": "Panama (Republic of)", "code": "PA"},
   {"mid": 553, "name": "Papua New Guinea", "code": "PG"},
   {"mid": 755, "name": "Paraguay (Republic of)", "code": "PY"},
   {"mid": 760, "name": "Peru", "code": "PE"},
   {"mid": 548, "name": "Philippines (Republic of the)", "code": "PH"},
   {"mid": 261, "name": "Poland (Republic of)", "code": "PL"},
   {"mid": 263, "name": "Portugal", "code": "PT"},
   {"mid": 204, "name": "Portugal - Azores", "code": "PT"},
   {"mid": 255, "name": "Portugal - Madeira", "code": "PT"},
   {"mid": 466, "name": "Qatar (State of)", "code": "QA"},
   {"mid": 271, "name": "Republic of Türkiye", "code": "TR"},
   {"mid": 264, "name": "Romania", "code": "RO"},
   {"mid": 273, "name": "Russian Federation", "code": "RU"},
   {"mid": 661, "name": "Rwanda (Republic of)", "code": "RW"},
   {"mid": 341, "name": "Saint Kitts and Nevis (Federation of)", "code": "KN"},
   {"mid": 343, "name": "Saint Lucia", "code": "LC"},
   {"mid": 375, "name": "Saint Vincent and the Grenadines", "code": "VC"},
   {"mid": 376, "name": "Saint Vincent and the Grenadines", "code": "VC"},
   {"mid": 377, "name": "Saint Vincent and the Grenadines", "code": "VC"},
   {"mid": 561, "name": "Samoa (Independent State of)", "code": "WS"},
   {"mid": 268, "name": "San Marino (Republic of)", "code": "SM"},
   {"mid": 668, "name": "Sao Tome and Principe (Democratic Republic of)", "code": "ST"},
   {"mid": 403, "name": "Saudi Arabia (Kingdom of)", "code": "SA"},
   {"mid": 663, "name": "Senegal (Republic of)", "code": "SN"},
   {"mid": 279, "name": "Serbia (Republic of)", "code": "RS"},
   {"mid": 664, "name": "Seychelles (Republic of)", "code": "SC"},
   {"mid": 667, "name": "Sierra Leone", "code": "SL"},
   {"mid": 563, "name": "Singapore (Republic of)", "code": "SG"},
   {"mid": 564, "name": "Singapore (Republic of)", "code": "SG"},
   {"mid": 565, "name": "Singapore (Republic of)", "code": "SG"},
   {"mid": 566, "name": "Singapore (Republic of)", "code": "SG"},
   {"mid": 267, "name": "Slovak Republic", "code": "SK"},
   {"mid": 278, "name": "Slovenia (Republic of)", "code": "SI"},
   {"mid": 557, "name": "Solomon Islands", "code": "SB"},
   {"mid": 666, "name": "Somalia (Federal Republic of)", "code": "SO"},
   {"mid": 601, "name": "South Africa (Republic of)", "code": "ZA"},
   {"mid": 638, "name": "South Sudan (Republic of)", "code": "SS"},
   {"mid": 224, "name": "Spain", "code": "ES"},
   {"mid": 225, "name": "Spain", "code": "ES"},
   {"mid": 417, "name": "Sri Lanka (Democratic Socialist Republic of)", "code": "LK"},
   {"mid": 443, "name": "State of Palestine (In accordance with Resolution 99 Rev. Dubai, 2018)", "code": "PS"},
   {"mid": 662, "name": "Sudan (Republic of the)", "code": "SD"},
   {"mid": 765, "name": "Suriname (Republic of)", "code": "SR"},
   {"mid": 265, "name": "Sweden", "code": "SE"},
   {"mid": 266, "name": "Sweden", "code": "SE"},
   {"mid": 269, "name": "Switzerland (Confederation of)", "code": "CH"},
   {"mid": 468, "name": "Syrian Arab Republic", "code": "SY"},
   {"mid": 472, "name": "Tajikistan (Republic of)", "code": "TJ"},
   {"mid": 674, "name": "Tanzania (United Republic of)", "code": "TZ"},
   {"mid": 677, "name": "Tanzania (United Republic of)", "code": "TZ"},
   {"mid": 567, "name": "Thailand", "code": "TH"},
   {"mid": 550, "name": "Timor-Leste (Democratic Republic of)", "code": "TL"},
   {"mid": 671, "name": "Togolese Republic", "code": "TG"},
   {"mid": 570, "name": "Tonga (Kingdom of)", "code": "TO"},
   {"mid": 362, "name": "Trinidad and Tobago", "code": "TT"},
   {"mid": 672, "name": "Tunisia", "code": "TN"},
   {"mid": 434, "name": "Turkmenistan", "code": "TM"},
   {"mid": 572, "name": "Tuvalu", "code": "TV"},
   {"mid": 675, "name": "Uganda (Republic of)", "code": "UG"},
   {"mid": 272, "name": "Ukraine", "code": "UA"},
   {"mid": 470, "name": "United Arab Emirates", "code": "AE"},
   {"mid": 471, "name": "United Arab Emirates", "code": "AE"},
   {"mid": 232, "name": "United Kingdom of Great Britain and Northern Ireland", "code": "UK"},
   {"mid": 233, "name": "United Kingdom of Great Britain and Northern Ireland", "code": "UK"},
   {"mid": 234, "name": "United Kingdom of Great Britain and Northern Ireland", "code": "UK"},
   {"mid": 235, "name": "United Kingdom of Great Britain and Northern Ireland", "code": "UK"},
   {"mid": 301, "name": "United Kingdom of Great Britain and Northern Ireland - Anguilla", "code": "AI"},
   {"mid": 608, "name": "United Kingdom of Great Britain and Northern Ireland - Ascension Island", "code": "UK"},
   {"mid": 310, "name": "United Kingdom of Great Britain and Northern Ireland - Bermuda", "code": "BM"},
   {"mid": 378, "name": "United Kingdom of Great Britain and Northern Ireland - British Virgin Islands", "code": "VG"},
   {"mid": 319, "name": "United Kingdom of Great Britain and Northern Ireland - Cayman Islands", "code": "KY"},
   {"mid": 740, "name": "United Kingdom of Great Britain and Northern Ireland - Falkland Islands (Malvinas)", "code": "FK"},
   {"mid": 236, "name": "United Kingdom of Great Britain and Northern Ireland - Gibraltar", "code": "GI"},
   {"mid": 348, "name": "United Kingdom of Great Britain and Northern Ireland - Montserrat", "code": "MS"},
   {"mid": 555, "name": "United Kingdom of Great Britain and Northern Ireland - Pitcairn Island", "code": "PN"},
   {"mid": 665, "name": "United Kingdom of Great Britain and Northern Ireland - Saint Helena", "code": "SH"},
   {"mid": 364, "name": "United Kingdom of Great Britain and Northern Ireland - Turks and Caicos Islands", "code": "TC"},
   {"mid": 338, "name": "United States of America", "code": "US"},
   {"mid": 366, "name": "United States of America", "code": "US"},
   {"mid": 367, "name": "United States of America", "code": "US"},
   {"mid": 368, "name": "United States of America", "code": "US"},
   {"mid": 369, "name": "United States of America", "code": "US"},
   {"mid": 303, "name": "United States of America - Alaska (State of)", "code": "US"},
   {"mid": 559, "name": "United States of America - American Samoa", "code": "WS"},
   {"mid": 536, "name": "United States of America - Northern Mariana Islands (Commonwealth of the)", "code": "MP"},
   {"mid": 358, "name": "United States of America - Puerto Rico", "code": "PR"},
   {"mid": 379, "name": "United States of America - United States Virgin Islands", "code": "VI"},
   {"mid": 770, "name": "Uruguay (Eastern Republic of)", "code": "UY"},
   {"mid": 437, "name": "Uzbekistan (Republic of)", "code": "UZ"},
   {"mid": 576, "name": "Vanuatu (Republic of)", "code": "VU"},
   {"mid": 577, "name": "Vanuatu (Republic of)", "code": "VU"},
   {"mid": 208, "name": "Vatican City State", "code": "VA"},
   {"mid": 775, "name": "Venezuela (Bolivarian Republic of)", "code": "VE"},
   {"mid": 574, "name": "Viet Nam (Socialist Republic of)", "code": "VN"},
   {"mid": 473, "name": "Yemen (Republic of)", "code": "YE"},
   {"mid": 475, "name": "Yemen (Republic of)", "code": "YE"},
   {"mid": 678, "name": "Zambia (Republic of)", "code": "ZM"},
   {"mid": 679, "name": "Zimbabwe (Republic of)", "code": "ZW"}
];


/*! Callback function to find object by MID. */
function find_data_by_mid(mo)
{
   if (mo.mid == this)
      return mo;
}


/*! Find object by MMSI and return it.
 * @param mmsi MMSI number of type string.
 * @param i Index of MID with MMSI string.
 * @param type This will be added to the object as member 'type'.
 * @return This function always returns a MID object. If the MID is not found,
 * the object EMID.UNKNWN is returned (negative mid).
 */
function find_mo_by_mid_index(mmsi, i, type)
{
   var mo = midlist_.find(find_data_by_mid, parseInt(mmsi.substring(i, i + 3)));
   if (mo === undefined)
      return EMID.UNKNWN;
   mo.type = type;
   return mo;
}


/*! This function decodes an MMSI and returns an appropriate MID object.
 * @param mmsi MMSI number, can be a string or number.
 * @return This function allways returns a MID object. In case of error, the
 * member 'mid' is set to a negative value (see error codes above.)
 */
function get_mid_data(mmsi)
{
   if (typeof mmsi === "number")
      mmsi = mmsi.toFixed(0) + "";

   if (mmsi.length != 9)
      return EMID.ILLLEN;

   if (/^[0-9]+$/.test(mmsi) == false)
      return EMID.ILLCHR;

   // test for regular mmsi
   if (/^[2-7]/.test(mmsi))
      return find_mo_by_mid_index(mmsi, 0, "ship");

   // test for coast stations
   if (/^00/.test(mmsi))
      return find_mo_by_mid_index(mmsi, 2, "coast station");

   if (/^98/.test(mmsi))
      return find_mo_by_mid_index(mmsi, 2, "tender");

   // test for AtoNs
   if (/^99/.test(mmsi))
      return find_mo_by_mid_index(mmsi, 2, "AtoN");

   if (/^111/.test(mmsi))
      return find_mo_by_mid_index(mmsi, 3, "SAR aircraft");
      
   if (/^970/.test(mmsi))
      return {mid: 0, name: "", code: "", type: "SART"};

   if (/^972/.test(mmsi))
      return {mid: 0, name: "", code: "", type: "MOB SART"};

   if (/^974/.test(mmsi))
      return {mid: 0, name: "", code: "", type: "EPIRB"};

   return EMID.DECERR;
}


// test data
mo = get_mid_data(""); console.log(mo);
mo = get_mid_data("00203245"); console.log(mo);
mo = get_mid_data("20aa24544"); console.log(mo);
mo = get_mid_data("203245443"); console.log(mo);
mo = get_mid_data("002042454"); console.log(mo);
mo = get_mid_data("982052454"); console.log(mo);
mo = get_mid_data("992062454"); console.log(mo);
mo = get_mid_data(207245400); console.log(mo);
mo = get_mid_data("299245443"); console.log(mo);


