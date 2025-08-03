// Unicode character mappings for different text styles
const unicodeStyles = {
    normal: {
        'a': 'a', 'b': 'b', 'c': 'c', 'd': 'd', 'e': 'e', 'f': 'f', 'g': 'g', 'h': 'h', 'i': 'i', 'j': 'j', 'k': 'k', 'l': 'l', 'm': 'm',
        'n': 'n', 'o': 'o', 'p': 'p', 'q': 'q', 'r': 'r', 's': 's', 't': 't', 'u': 'u', 'v': 'v', 'w': 'w', 'x': 'x', 'y': 'y', 'z': 'z',
        'A': 'A', 'B': 'B', 'C': 'C', 'D': 'D', 'E': 'E', 'F': 'F', 'G': 'G', 'H': 'H', 'I': 'I', 'J': 'J', 'K': 'K', 'L': 'L', 'M': 'M',
        'N': 'N', 'O': 'O', 'P': 'P', 'Q': 'Q', 'R': 'R', 'S': 'S', 'T': 'T', 'U': 'U', 'V': 'V', 'W': 'W', 'X': 'X', 'Y': 'Y', 'Z': 'Z',
        '0': '0', '1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', '8': '8', '9': '9'
    },
    bold: {
        'a': '𝐚', 'b': '𝐛', 'c': '𝐜', 'd': '𝐝', 'e': '𝐞', 'f': '𝐟', 'g': '𝐠', 'h': '𝐡', 'i': '𝐢', 'j': '𝐣', 'k': '𝐤', 'l': '𝐥', 'm': '𝐦',
        'n': '𝐧', 'o': '𝐨', 'p': '𝐩', 'q': '𝐪', 'r': '𝐫', 's': '𝐬', 't': '𝐭', 'u': '𝐮', 'v': '𝐯', 'w': '𝐰', 'x': '𝐱', 'y': '𝐲', 'z': '𝐳',
        'A': '𝐀', 'B': '𝐁', 'C': '𝐂', 'D': '𝐃', 'E': '𝐄', 'F': '𝐅', 'G': '𝐆', 'H': '𝐇', 'I': '𝐈', 'J': '𝐉', 'K': '𝐊', 'L': '𝐋', 'M': '𝐌',
        'N': '𝐍', 'O': '𝐎', 'P': '𝐏', 'Q': '𝐐', 'R': '𝐑', 'S': '𝐒', 'T': '𝐓', 'U': '𝐔', 'V': '𝐕', 'W': '𝐖', 'X': '𝐗', 'Y': '𝐘', 'Z': '𝐙',
        '0': '𝟎', '1': '𝟏', '2': '𝟐', '3': '𝟑', '4': '𝟒', '5': '𝟓', '6': '𝟔', '7': '𝟕', '8': '𝟖', '9': '𝟗'
    },
    'bold-sans': {
        'a': '𝗮', 'b': '𝗯', 'c': '𝗰', 'd': '𝗱', 'e': '𝗲', 'f': '𝗳', 'g': '𝗴', 'h': '𝗵', 'i': '𝗶', 'j': '𝗷', 'k': '𝗸', 'l': '𝗹', 'm': '𝗺',
        'n': '𝗻', 'o': '𝗼', 'p': '𝗽', 'q': '𝗾', 'r': '𝗿', 's': '𝘀', 't': '𝘁', 'u': '𝘂', 'v': '𝘃', 'w': '𝘄', 'x': '𝘅', 'y': '𝘆', 'z': '𝘇',
        'A': '𝗔', 'B': '𝗕', 'C': '𝗖', 'D': '𝗗', 'E': '𝗘', 'F': '𝗙', 'G': '𝗚', 'H': '𝗛', 'I': '𝗜', 'J': '𝗝', 'K': '𝗞', 'L': '𝗟', 'M': '𝗠',
        'N': '𝗡', 'O': '𝗢', 'P': '𝗣', 'Q': '𝗤', 'R': '𝗥', 'S': '𝗦', 'T': '𝗧', 'U': '𝗨', 'V': '𝗩', 'W': '𝗪', 'X': '𝗫', 'Y': '𝗬', 'Z': '𝗭',
        '0': '𝟬', '1': '𝟭', '2': '𝟮', '3': '𝟯', '4': '𝟰', '5': '𝟱', '6': '𝟲', '7': '𝟳', '8': '𝟴', '9': '𝟵'
    },
    italic: {
        'a': '𝑎', 'b': '𝑏', 'c': '𝑐', 'd': '𝑑', 'e': '𝑒', 'f': '𝑓', 'g': '𝑔', 'h': 'ℎ', 'i': '𝑖', 'j': '𝑗', 'k': '𝑘', 'l': '𝑙', 'm': '𝑚',
        'n': '𝑛', 'o': '𝑜', 'p': '𝑝', 'q': '𝑞', 'r': '𝑟', 's': '𝑠', 't': '𝑡', 'u': '𝑢', 'v': '𝑣', 'w': '𝑤', 'x': '𝑥', 'y': '𝑦', 'z': '𝑧',
        'A': '𝐴', 'B': '𝐵', 'C': '𝐶', 'D': '𝐷', 'E': '𝐸', 'F': '𝐹', 'G': '𝐺', 'H': '𝐻', 'I': '𝐼', 'J': '𝐽', 'K': '𝐾', 'L': '𝐿', 'M': '𝑀',
        'N': '𝑁', 'O': '𝑂', 'P': '𝑃', 'Q': '𝑄', 'R': '𝑅', 'S': '𝑆', 'T': '𝑇', 'U': '𝑈', 'V': '𝑉', 'W': '𝑊', 'X': '𝑋', 'Y': '𝑌', 'Z': '𝑍',
        '0': '0', '1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', '8': '8', '9': '9'
    },
    'italic-sans': {
        'a': '𝘢', 'b': '𝘣', 'c': '𝘤', 'd': '𝘥', 'e': '𝘦', 'f': '𝘧', 'g': '𝘨', 'h': '𝘩', 'i': '𝘪', 'j': '𝘫', 'k': '𝘬', 'l': '𝘭', 'm': '𝘮',
        'n': '𝘯', 'o': '𝘰', 'p': '𝘱', 'q': '𝘲', 'r': '𝘳', 's': '𝘴', 't': '𝘵', 'u': '𝘶', 'v': '𝘷', 'w': '𝘸', 'x': '𝘹', 'y': '𝘺', 'z': '𝘻',
        'A': '𝘈', 'B': '𝘉', 'C': '𝘊', 'D': '𝘋', 'E': '𝘌', 'F': '𝘍', 'G': '𝘎', 'H': '𝘏', 'I': '𝘐', 'J': '𝘑', 'K': '𝘒', 'L': '𝘓', 'M': '𝘔',
        'N': '𝘕', 'O': '𝘖', 'P': '𝘗', 'Q': '𝘘', 'R': '𝘙', 'S': '𝘚', 'T': '𝘛', 'U': '𝘜', 'V': '𝘝', 'W': '𝘞', 'X': '𝘟', 'Y': '𝘠', 'Z': '𝘡',
        '0': '0', '1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', '8': '8', '9': '9'
    },
    'bold-italic': {
        'a': '𝒂', 'b': '𝒃', 'c': '𝒄', 'd': '𝒅', 'e': '𝒆', 'f': '𝒇', 'g': '𝒈', 'h': '𝒉', 'i': '𝒊', 'j': '𝒋', 'k': '𝒌', 'l': '𝒍', 'm': '𝒎',
        'n': '𝒏', 'o': '𝒐', 'p': '𝒑', 'q': '𝒒', 'r': '𝒓', 's': '𝒔', 't': '𝒕', 'u': '𝒖', 'v': '𝒗', 'w': '𝒘', 'x': '𝒙', 'y': '𝒚', 'z': '𝒛',
        'A': '𝑨', 'B': '𝑩', 'C': '𝑪', 'D': '𝑫', 'E': '𝑬', 'F': '𝑭', 'G': '𝑮', 'H': '𝑯', 'I': '𝑰', 'J': '𝑱', 'K': '𝑲', 'L': '𝑳', 'M': '𝑴',
        'N': '𝑵', 'O': '𝑶', 'P': '𝑷', 'Q': '𝑸', 'R': '𝑹', 'S': '𝑺', 'T': '𝑻', 'U': '𝑼', 'V': '𝑽', 'W': '𝑾', 'X': '𝑿', 'Y': '𝒀', 'Z': '𝒁',
        '0': '0', '1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', '8': '8', '9': '9'
    },
    'bold-italic-sans': {
        'a': '𝙖', 'b': '𝙗', 'c': '𝙘', 'd': '𝙙', 'e': '𝙚', 'f': '𝙛', 'g': '𝙜', 'h': '𝙝', 'i': '𝙞', 'j': '𝙟', 'k': '𝙠', 'l': '𝙡', 'm': '𝙢',
        'n': '𝙣', 'o': '𝙤', 'p': '𝙥', 'q': '𝙦', 'r': '𝙧', 's': '𝙨', 't': '𝙩', 'u': '𝙪', 'v': '𝙫', 'w': '𝙬', 'x': '𝙭', 'y': '𝙮', 'z': '𝙯',
        'A': '𝘼', 'B': '𝘽', 'C': '𝘾', 'D': '𝘿', 'E': '𝙀', 'F': '𝙁', 'G': '𝙂', 'H': '𝙃', 'I': '𝙄', 'J': '𝙅', 'K': '𝙆', 'L': '𝙇', 'M': '𝙈',
        'N': '𝙉', 'O': '𝙊', 'P': '𝙋', 'Q': '𝙌', 'R': '𝙍', 'S': '𝙎', 'T': '𝙏', 'U': '𝙐', 'V': '𝙑', 'W': '𝙒', 'X': '𝙓', 'Y': '𝙔', 'Z': '𝙕',
        '0': '0', '1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', '8': '8', '9': '9'
    },
    sans: {
        'a': '𝖺', 'b': '𝖻', 'c': '𝖼', 'd': '𝖽', 'e': '𝖾', 'f': '𝖿', 'g': '𝗀', 'h': '𝗁', 'i': '𝗂', 'j': '𝗃', 'k': '𝗄', 'l': '𝗅', 'm': '𝗆',
        'n': '𝗇', 'o': '𝗈', 'p': '𝗉', 'q': '𝗊', 'r': '𝗋', 's': '𝗌', 't': '𝗍', 'u': '𝗎', 'v': '𝗏', 'w': '𝗐', 'x': '𝗑', 'y': '𝗒', 'z': '𝗓',
        'A': '𝖠', 'B': '𝖡', 'C': '𝖢', 'D': '𝖣', 'E': '𝖤', 'F': '𝖥', 'G': '𝖦', 'H': '𝖧', 'I': '𝖨', 'J': '𝖩', 'K': '𝖪', 'L': '𝖫', 'M': '𝖬',
        'N': '𝖭', 'O': '𝖮', 'P': '𝖯', 'Q': '𝖰', 'R': '𝖱', 'S': '𝖲', 'T': '𝖳', 'U': '𝖴', 'V': '𝖵', 'W': '𝖶', 'X': '𝖷', 'Y': '𝖸', 'Z': '𝖹',
        '0': '𝟢', '1': '𝟣', '2': '𝟤', '3': '𝟥', '4': '𝟦', '5': '𝟧', '6': '𝟨', '7': '𝟩', '8': '𝟪', '9': '𝟫'
    },
    underline: {
        'a': 'a̲', 'b': 'b̲', 'c': 'c̲', 'd': 'd̲', 'e': 'e̲', 'f': 'f̲', 'g': 'g̲', 'h': 'h̲', 'i': 'i̲', 'j': 'j̲', 'k': 'k̲', 'l': 'l̲', 'm': 'm̲',
        'n': 'n̲', 'o': 'o̲', 'p': 'p̲', 'q': 'q̲', 'r': 'r̲', 's': 's̲', 't': 't̲', 'u': 'u̲', 'v': 'v̲', 'w': 'w̲', 'x': 'x̲', 'y': 'y̲', 'z': 'z̲',
        'A': 'A̲', 'B': 'B̲', 'C': 'C̲', 'D': 'D̲', 'E': 'E̲', 'F': 'F̲', 'G': 'G̲', 'H': 'H̲', 'I': 'I̲', 'J': 'J̲', 'K': 'K̲', 'L': 'L̲', 'M': 'M̲',
        'N': 'N̲', 'O': 'O̲', 'P': 'P̲', 'Q': 'Q̲', 'R': 'R̲', 'S': 'S̲', 'T': 'T̲', 'U': 'U̲', 'V': 'V̲', 'W': 'W̲', 'X': 'X̲', 'Y': 'Y̲', 'Z': 'Z̲',
        '0': '0̲', '1': '1̲', '2': '2̲', '3': '3̲', '4': '4̲', '5': '5̲', '6': '6̲', '7': '7̲', '8': '8̲', '9': '9̲'
    },
    monospace: {
        'a': '𝚊', 'b': '𝚋', 'c': '𝚌', 'd': '𝚍', 'e': '𝚎', 'f': '𝚏', 'g': '𝚐', 'h': '𝚑', 'i': '𝚒', 'j': '𝚓', 'k': '𝚔', 'l': '𝚕', 'm': '𝚖',
        'n': '𝚗', 'o': '𝚘', 'p': '𝚙', 'q': '𝚚', 'r': '𝚛', 's': '𝚜', 't': '𝚝', 'u': '𝚞', 'v': '𝚟', 'w': '𝚠', 'x': '𝚡', 'y': '𝚢', 'z': '𝚣',
        'A': '𝙰', 'B': '𝙱', 'C': '𝙲', 'D': '𝙳', 'E': '𝙴', 'F': '𝙵', 'G': '𝙶', 'H': '𝙷', 'I': '𝙸', 'J': '𝙹', 'K': '𝙺', 'L': '𝙻', 'M': '𝙼',
        'N': '𝙽', 'O': '𝙾', 'P': '𝙿', 'Q': '𝚀', 'R': '𝚁', 'S': '𝚂', 'T': '𝚃', 'U': '𝚄', 'V': '𝚅', 'W': '𝚆', 'X': '𝚇', 'Y': '𝚈', 'Z': '𝚉',
        '0': '𝟶', '1': '𝟷', '2': '𝟸', '3': '𝟹', '4': '𝟺', '5': '𝟻', '6': '𝟼', '7': '𝟽', '8': '𝟾', '9': '𝟿'
    },
    'double-struck': {
        'a': '𝕒', 'b': '𝕓', 'c': '𝕔', 'd': '𝕕', 'e': '𝕖', 'f': '𝕗', 'g': '𝕘', 'h': '𝕙', 'i': '𝕚', 'j': '𝕛', 'k': '𝕜', 'l': '𝕝', 'm': '𝕞',
        'n': '𝕟', 'o': '𝕠', 'p': '𝕡', 'q': '𝕢', 'r': '𝕣', 's': '𝕤', 't': '𝕥', 'u': '𝕦', 'v': '𝕧', 'w': '𝕨', 'x': '𝕩', 'y': '𝕪', 'z': '𝕫',
        'A': '𝔸', 'B': '𝔹', 'C': 'ℂ', 'D': '𝔻', 'E': '𝔼', 'F': '𝔽', 'G': '𝔾', 'H': 'ℍ', 'I': '𝕀', 'J': '𝕁', 'K': '𝕂', 'L': '𝕃', 'M': '𝕄',
        'N': 'ℕ', 'O': '𝕆', 'P': 'ℙ', 'Q': 'ℚ', 'R': 'ℝ', 'S': '𝕊', 'T': '𝕋', 'U': '𝕌', 'V': '𝕍', 'W': '𝕎', 'X': '𝕏', 'Y': '𝕐', 'Z': 'ℤ',
        '0': '𝟘', '1': '𝟙', '2': '𝟚', '3': '𝟛', '4': '𝟜', '5': '𝟝', '6': '𝟞', '7': '𝟟', '8': '𝟠', '9': '𝟡'
    },
    script: {
        'a': '𝒶', 'b': '𝒷', 'c': '𝒸', 'd': '𝒹', 'e': 'ℯ', 'f': '𝒻', 'g': 'ℊ', 'h': '𝒽', 'i': '𝒾', 'j': '𝒿', 'k': '𝓀', 'l': '𝓁', 'm': '𝓂',
        'n': '𝓃', 'o': 'ℴ', 'p': '𝓅', 'q': '𝓆', 'r': '𝓇', 's': '𝓈', 't': '𝓉', 'u': '𝓊', 'v': '𝓋', 'w': '𝓌', 'x': '𝓍', 'y': '𝓎', 'z': '𝓏',
        'A': '𝒜', 'B': 'ℬ', 'C': '𝒞', 'D': '𝒟', 'E': 'ℰ', 'F': 'ℱ', 'G': '𝒢', 'H': 'ℋ', 'I': 'ℐ', 'J': '𝒥', 'K': '𝒦', 'L': 'ℒ', 'M': 'ℳ',
        'N': '𝒩', 'O': '𝒪', 'P': '𝒫', 'Q': '𝒬', 'R': 'ℛ', 'S': '𝒮', 'T': '𝒯', 'U': '𝒰', 'V': '𝒱', 'W': '𝒲', 'X': '𝒳', 'Y': '𝒴', 'Z': '𝒵',
        '0': '0', '1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', '8': '8', '9': '9'
    },
    'small-caps': {
        'a': 'ᴀ', 'b': 'ʙ', 'c': 'ᴄ', 'd': 'ᴅ', 'e': 'ᴇ', 'f': 'ꜰ', 'g': 'ɢ', 'h': 'ʜ', 'i': 'ɪ', 'j': 'ᴊ', 'k': 'ᴋ', 'l': 'ʟ', 'm': 'ᴍ',
        'n': 'ɴ', 'o': 'ᴏ', 'p': 'ᴘ', 'q': 'Q', 'r': 'ʀ', 's': 'ꜱ', 't': 'ᴛ', 'u': 'ᴜ', 'v': 'ᴠ', 'w': 'ᴡ', 'x': 'x', 'y': 'ʏ', 'z': 'ᴢ',
        'A': 'ᴀ', 'B': 'ʙ', 'C': 'ᴄ', 'D': 'ᴅ', 'E': 'ᴇ', 'F': 'ꜰ', 'G': 'ɢ', 'H': 'ʜ', 'I': 'ɪ', 'J': 'ᴊ', 'K': 'ᴋ', 'L': 'ʟ', 'M': 'ᴍ',
        'N': 'ɴ', 'O': 'ᴏ', 'P': 'ᴘ', 'Q': 'Q', 'R': 'ʀ', 'S': 'ꜱ', 'T': 'ᴛ', 'U': 'ᴜ', 'V': 'ᴠ', 'W': 'ᴡ', 'X': 'x', 'Y': 'ʏ', 'Z': 'ᴢ',
        '0': '0', '1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', '8': '8', '9': '9'
    },
    circled: {
        'a': 'ⓐ', 'b': 'ⓑ', 'c': 'ⓒ', 'd': 'ⓓ', 'e': 'ⓔ', 'f': 'ⓕ', 'g': 'ⓖ', 'h': 'ⓗ', 'i': 'ⓘ', 'j': 'ⓙ', 'k': 'ⓚ', 'l': 'ⓛ', 'm': 'ⓜ',
        'n': 'ⓝ', 'o': 'ⓞ', 'p': 'ⓟ', 'q': 'ⓠ', 'r': 'ⓡ', 's': 'ⓢ', 't': 'ⓣ', 'u': 'ⓤ', 'v': 'ⓥ', 'w': 'ⓦ', 'x': 'ⓧ', 'y': 'ⓨ', 'z': 'ⓩ',
        'A': 'Ⓐ', 'B': 'Ⓑ', 'C': 'Ⓒ', 'D': 'Ⓓ', 'E': 'Ⓔ', 'F': 'Ⓕ', 'G': 'Ⓖ', 'H': 'Ⓗ', 'I': 'Ⓘ', 'J': 'Ⓙ', 'K': 'Ⓚ', 'L': 'Ⓛ', 'M': 'Ⓜ',
        'N': 'Ⓝ', 'O': 'Ⓞ', 'P': 'Ⓟ', 'Q': 'Ⓠ', 'R': 'Ⓡ', 'S': 'Ⓢ', 'T': 'Ⓣ', 'U': 'Ⓤ', 'V': 'Ⓥ', 'W': 'Ⓦ', 'X': 'Ⓧ', 'Y': 'Ⓨ', 'Z': 'Ⓩ',
        '0': '⓪', '1': '①', '2': '②', '3': '③', '4': '④', '5': '⑤', '6': '⑥', '7': '⑦', '8': '⑧', '9': '⑨'
    },
    squared: {
        'a': '🅰', 'b': '🅱', 'c': '🅲', 'd': '🅳', 'e': '🅴', 'f': '🅵', 'g': '🅶', 'h': '🅷', 'i': '🅸', 'j': '🅹', 'k': '🅺', 'l': '🅻', 'm': '🅼',
        'n': '🅽', 'o': '🅾', 'p': '🅿', 'q': '🆀', 'r': '🆁', 's': '🆂', 't': '🆃', 'u': '🆄', 'v': '🆅', 'w': '🆆', 'x': '🆇', 'y': '🆈', 'z': '🆉',
        'A': '🅰', 'B': '🅱', 'C': '🅲', 'D': '🅳', 'E': '🅴', 'F': '🅵', 'G': '🅶', 'H': '🅷', 'I': '🅸', 'J': '🅹', 'K': '🅺', 'L': '🅻', 'M': '🅼',
        'N': '🅽', 'O': '🅾', 'P': '🅿', 'Q': '🆀', 'R': '🆁', 'S': '🆂', 'T': '🆃', 'U': '🆄', 'V': '🆅', 'W': '🆆', 'X': '🆇', 'Y': '🆈', 'Z': '🆉',
        '0': '0', '1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', '8': '8', '9': '9'
    }
};

let currentFormats = new Set();
let inputText = '';
let originalPlainText = '';
let undoHistory = [];
let maxUndoSteps = 50;
let isFormattingOperation = false;

// DOM elements - will be populated after DOM is ready
let textarea = null;
let charCounter = null;
let previewContent = null;
let formatButtons = null;
let clearButton = null;
let undoButton = null;
let fontDropdown = null;
let copyButton = null;
let copyVariantButtons = null;

// Initialize the app
function init() {
    setupEventListeners();
    originalPlainText = '';
    if (undoButton) {
        undoButton.disabled = true;
    }
    updatePreview();
    updateVariants();
}

// Event listeners
function setupEventListeners() {
    if (textarea) {
        textarea.addEventListener('input', handleTextInput);
    }
    
    if (formatButtons) {
        formatButtons.forEach(button => {
            button.addEventListener('click', () => applyFormatToSelection(button.dataset.format));
        });
    }
    
    if (fontDropdown) {
        fontDropdown.addEventListener('change', handleFontDropdownChange);
    }
    
    if (undoButton) {
        undoButton.addEventListener('click', undoLastAction);
    }
    
    if (clearButton) {
        clearButton.addEventListener('click', clearAll);
    }
    
    if (copyButton) {
        copyButton.addEventListener('click', () => copyToClipboard(textarea.value));
    }
    
    if (copyVariantButtons) {
        copyVariantButtons.forEach(button => {
            button.addEventListener('click', () => {
                const variant = button.dataset.variant;
                const text = convertTextToStyle(originalPlainText, variant);
                copyToClipboard(text);
            });
        });
    }
}

// Handle text input
function handleTextInput() {
    inputText = textarea.value;
    
    // Only update originalPlainText if this is direct typing (not from formatting)
    if (!isFormattingOperation) {
        originalPlainText = removeAllStyling(inputText);
    }
    
    updateCharCounter();
    updatePreview();
    updateVariants();
}

// Save state for undo
function saveUndoState() {
    if (!textarea) return;
    
    undoHistory.push({
        value: textarea.value,
        selectionStart: textarea.selectionStart,
        selectionEnd: textarea.selectionEnd
    });
    
    // Limit undo history
    if (undoHistory.length > maxUndoSteps) {
        undoHistory.shift();
    }
    
    // Update undo button state
    if (undoButton) {
        undoButton.disabled = undoHistory.length === 0;
    }
}

// Undo last action
function undoLastAction() {
    if (undoHistory.length === 0 || !textarea) return;
    
    const lastState = undoHistory.pop();
    isFormattingOperation = true;
    textarea.value = lastState.value;
    textarea.setSelectionRange(lastState.selectionStart, lastState.selectionEnd);
    
    // Update undo button state
    if (undoButton) {
        undoButton.disabled = undoHistory.length === 0;
    }
    
    // Trigger input event to update everything
    textarea.dispatchEvent(new Event('input'));
    isFormattingOperation = false;
}

// Handle font dropdown change
function handleFontDropdownChange() {
    if (!fontDropdown) return;
    
    const selectedStyle = fontDropdown.value;
    if (selectedStyle) {
        applyFormatToSelection(selectedStyle);
        fontDropdown.value = ''; // Reset dropdown
    }
}

// Apply format to selected text only
function applyFormatToSelection(format) {
    if (!textarea) return;
    
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    
    if (start === end) {
        // No text selected, show message
        showToast('Please select text to format');
        return;
    }
    
    // Save current state for undo
    saveUndoState();
    
    const selectedText = textarea.value.substring(start, end);
    const beforeText = textarea.value.substring(0, start);
    const afterText = textarea.value.substring(end);
    
    // Apply formatting to selected text
    let formattedText = selectedText;
    
    switch(format) {
        case 'bold':
            formattedText = convertTextToStyle(selectedText, 'bold');
            break;
        case 'italic':
            formattedText = convertTextToStyle(selectedText, 'italic');
            break;
        case 'underline':
            formattedText = convertTextToStyle(selectedText, 'underline');
            break;
        case 'bold-sans':
            formattedText = convertTextToStyle(selectedText, 'bold-sans');
            break;
        case 'italic-sans':
            formattedText = convertTextToStyle(selectedText, 'italic-sans');
            break;
        case 'bold-italic':
            formattedText = convertTextToStyle(selectedText, 'bold-italic');
            break;
        case 'bold-italic-sans':
            formattedText = convertTextToStyle(selectedText, 'bold-italic-sans');
            break;
        case 'sans':
            formattedText = convertTextToStyle(selectedText, 'sans');
            break;
        case 'monospace':
            formattedText = convertTextToStyle(selectedText, 'monospace');
            break;
        case 'double-struck':
            formattedText = convertTextToStyle(selectedText, 'double-struck');
            break;
        case 'script':
            formattedText = convertTextToStyle(selectedText, 'script');
            break;
        case 'strikethrough':
            formattedText = addStrikethrough(selectedText);
            break;
        case 'small-caps':
            formattedText = convertTextToStyle(selectedText, 'small-caps');
            break;
        case 'circled':
            formattedText = convertTextToStyle(selectedText, 'circled');
            break;
        case 'squared':
            formattedText = convertTextToStyle(selectedText, 'squared');
            break;
    }
    
    // Replace text in textarea
    isFormattingOperation = true;
    textarea.value = beforeText + formattedText + afterText;
    
    // Update cursor position to end of formatted text
    const newCursorPos = start + formattedText.length;
    textarea.setSelectionRange(newCursorPos, newCursorPos);
    
    // Trigger input event to update everything
    textarea.dispatchEvent(new Event('input'));
    isFormattingOperation = false;
}

// Update character counter
function updateCharCounter() {
    if (!charCounter) return;
    
    const count = inputText.length;
    charCounter.textContent = count;
    
    if (count > 3000) {
        charCounter.style.color = '#d32f2f';
    } else if (count > 2500) {
        charCounter.style.color = '#ff9800';
    } else {
        charCounter.style.color = '#666666';
    }
}

// Toggle format
function toggleFormat(format) {
    const button = document.querySelector(`[data-format="${format}"]`);
    
    if (currentFormats.has(format)) {
        currentFormats.delete(format);
        button.classList.remove('active');
    } else {
        currentFormats.add(format);
        button.classList.add('active');
    }
    
    updatePreview();
    updateVariants();
}

// Clear all formatting
function clearAll() {
    currentFormats.clear();
    if (formatButtons) {
        formatButtons.forEach(button => button.classList.remove('active'));
    }
    if (textarea) {
        textarea.value = '';
    }
    inputText = '';
    originalPlainText = '';
    undoHistory = [];
    if (undoButton) {
        undoButton.disabled = true;
    }
    updateCharCounter();
    updatePreview();
    updateVariants();
}

// Get formatted text based on current formats
function getFormattedText() {
    let text = inputText;
    
    if (currentFormats.has('bold') && currentFormats.has('italic')) {
        text = convertTextToStyle(text, 'bold-italic');
    } else if (currentFormats.has('bold')) {
        text = convertTextToStyle(text, 'bold');
    } else if (currentFormats.has('italic')) {
        text = convertTextToStyle(text, 'italic');
    }
    
    if (currentFormats.has('underline')) {
        text = convertTextToStyle(text, 'underline');
    }
    
    if (currentFormats.has('strikethrough')) {
        text = addStrikethrough(text);
    }
    
    if (currentFormats.has('monospace')) {
        text = convertTextToStyle(text, 'monospace');
    }
    
    return text;
}

// Convert text to specific style
function convertTextToStyle(text, style) {
    if (!unicodeStyles[style]) {
        return text;
    }
    
    return text.split('').map(char => {
        return unicodeStyles[style][char] || char;
    }).join('');
}

// Add strikethrough
function addStrikethrough(text) {
    return text.split('').map(char => {
        if (char.match(/[a-zA-Z0-9]/)) {
            return char + '\u0336';
        }
        return char;
    }).join('');
}

// Update preview
function updatePreview() {
    if (!previewContent) return;
    
    if (inputText.trim() === '') {
        previewContent.innerHTML = `Start writing and your post will appear here..
        <br><br>
        You can add images, links, <span style="color: #0073b1;">#hashtags</span> and emojis 😊
        <br><br>
        This line will appear below the more...`;
    } else {
        const htmlText = formatTextForPreview(inputText);
        previewContent.innerHTML = htmlText;
    }
}

// Format text for preview (handle hashtags, links, etc.)
function formatTextForPreview(text) {
    return text
        .replace(/\n/g, '<br>')
        .replace(/#(\w+)/g, '<span style="color: #0073b1;">#$1</span>')
        .replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" style="color: #0073b1;">$1</a>');
}

// Update all style variants
function updateVariants() {
    const variants = ['normal', 'bold', 'bold-sans', 'italic', 'italic-sans', 'bold-italic', 'bold-italic-sans', 'sans', 'monospace', 'double-struck', 'script', 'underline', 'small-caps', 'circled', 'squared'];
    
    variants.forEach(variant => {
        const element = document.getElementById(`linkedin-post-variant-${variant}`);
        if (element) {
            if (originalPlainText.trim() === '') {
                element.textContent = 'Type something to see the preview...';
            } else {
                // Always use the original plain text for style variants
                const convertedText = convertTextToStyle(originalPlainText, variant);
                element.textContent = convertedText;
            }
        }
    });
}

// Remove all Unicode styling to get plain text
function removeAllStyling(text) {
    let plainText = text;
    
    // Remove combining characters for strikethrough and underline
    plainText = plainText.replace(/[\u0336\u0337\u0338\u0332\u0333\u0305\u033F\u033E\u0304]/g, '');
    
    // Create comprehensive reverse mapping for all Unicode styles
    const styledToNormal = {};
    
    // Build reverse mapping from all style dictionaries
    Object.values(unicodeStyles).forEach(style => {
        Object.entries(style).forEach(([normal, styled]) => {
            if (styled !== normal) {
                styledToNormal[styled] = normal;
            }
        });
    });
    
    // Convert each character back to normal if it has a styled version
    let result = '';
    for (let i = 0; i < plainText.length; i++) {
        const char = plainText[i];
        result += styledToNormal[char] || char;
    }
    
    return result;
}

// Copy to clipboard
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        showToast('Copied to clipboard!');
    } catch (err) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showToast('Copied to clipboard!');
    }
}

// Show toast notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #0a66c2;
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        font-size: 14px;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        animation: slideIn 0.3s ease;
    `;
    
    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
        style.remove();
    }, 3000);
}

// Auto-resize textarea
function autoResizeTextarea() {
    if (!textarea) return;
    textarea.style.height = 'auto';
    textarea.style.height = Math.min(textarea.scrollHeight, 300) + 'px';
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Populate DOM elements after DOM is ready
    textarea = document.getElementById('linkedin-post-input');
    charCounter = document.getElementById('linkedin-post-counter');
    previewContent = document.getElementById('linkedin-post-preview-content');
    formatButtons = document.querySelectorAll('.linkedin-post-format-btn');
    clearButton = document.querySelector('.linkedin-post-clear-btn');
    undoButton = document.getElementById('undo-btn');
    fontDropdown = document.getElementById('font-style-dropdown');
    copyButton = document.getElementById('linkedin-post-copy-text');
    copyVariantButtons = document.querySelectorAll('.linkedin-post-copy-variant');
    
    // Enhanced textarea functionality
    if (textarea) {
        textarea.addEventListener('input', autoResizeTextarea);
    }
    
    // Check if all required elements exist before initializing
    if (textarea && charCounter && previewContent) {
        init();
    }
});
