(async function() {
    try {
        var res = await fetch("https://api.github.com/repos/Equicord/Equibop/releases/latest");
        var data = await res.json();
        var version = data.tag_name.replace(/^v/, "");

        document.querySelectorAll("a[data-filename]").forEach(function(btn) {
            var template = btn.dataset.filename;
            var filename = template.replace(/VERSION/g, version);
            btn.href = "https://github.com/Equicord/Equibop/releases/download/v" + version + "/" + filename;
        });
    } catch (e) {
        console.error("Failed to fetch version:", e);
        document.querySelectorAll("a[data-filename]").forEach(function(btn) {
            btn.href = "https://github.com/Equicord/Equibop/releases/latest";
        });
    }
})();
