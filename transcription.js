function DNAtoRNA() {
    const dnaInput = document.getElementById("in-sequence").value.toUpperCase();
    const rnaOutput = dnaInput.replaceAll(/[ATCG]/g, function (match) {
        if (match === "T") {
            return "A";
        } else if (match === "C") {
            return "G";
        } else if (match === "G") {
            return "C";
        } else if (match === "A") {
            return "U";
        }
    });
    document.getElementById("out-sequence").textContent = rnaOutput;
}

function mRNATranslation() {
    let rnaInput = document.getElementById("in-sequence").value.toUpperCase();
    rnaInput = rnaInput.replace(/\s/g, ""); 
    const codonTable = {
        "UUU": "Phenylalanine ",
        "UUC": "Phenylalanine ",
        "UUA": "Leucine ",
        "UUG": "Leucine ",
        "UCU": "Serine ",
        "UCC": "Serine ",
        "UCA": "Serine ",
        "UCG": "Serine ",
        "UAU": "Tyrosine ",
        "UAC": "Tyrosine ",
        "UAA": "Stop ",
        "UAG": "Stop ",
        "UGU": "Cysteine ",
        "UGC": "Cysteine ",
        "UGA": "Stop ",
        "UGG": "Tryptophan ",
        "CUU": "Leucine ",
        "CUC": "Leucine ",
        "CUA": "Leucine ",
        "CUG": "Leucine ",
        "CCU": "Proline ",
        "CCC": "Proline ",
        "CCA": "Proline ",
        "CCG": "Proline ",
        "CAU": "Histidine ",
        "CAC": "Histidine ",
        "CAA": "Glutamine ",
        "CAG": "Glutamine ",
        "CGU": "Arginine ",
        "CGC": "Arginine ",
        "CGA": "Arginine ",
        "CGG": "Arginine ",
        "AUU": "Isoleucine ",
        "AUC": "Isoleucine ",
        "AUA": "Isoleucine ",
        "AUG": "Methionine ",
        "ACU": "Threonine ",
        "ACC": "Threonine ",
        "ACA": "Threonine ",
        "ACG": "Threonine ",
        "AAU": "Asparagine ",
        "AAC": "Asparagine ",
        "AAA": "Lysine ",
        "AAG": "Lysine ",
        "AGU": "Serine ",
        "AGC": "Serine ",
        "AGA": "Arginine ",
        "AGG": "Arginine ",
        "GUU": "Valine ",
        "GUC": "Valine ",
        "GUA": "Valine ",
        "GUG": "Valine ",
        "GCU": "Alanine ",
        "GCC": "Alanine ",
        "GCA": "Alanine ",
        "GCG": "Alanine ",
        "GAU": "Aspartic acid ",
        "GAC": "Aspartic acid ",
        "GAA": "Glutamic acid ",
        "GAG": "Glutamic acid ",
        "GGU": "Glycine ",
        "GGC": "Glycine ",
        "GGA": "Glycine ",
        "GGG": "Glycine "
    };
    let proteinOutput = "";
    for (let i = 0; i < rnaInput.length - 2; i += 3) {
        const codon = rnaInput.substring(i, i + 3);
        const aminoAcid = codonTable[codon];
        if (aminoAcid === "Stop") {
            break;
        }
        proteinOutput += aminoAcid;
    }
    document.getElementById("out-sequence").textContent = proteinOutput;
}