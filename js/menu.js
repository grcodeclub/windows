window.onload = function() {
    var menuLinks = [
        '<li><a href="https://grcodeclub.gr">Αρχική Σελίδα</a></li>',
        '<li><a href="https://grcodeclub.github.io/windows">Microsoft Windows</a></li>',
        '<li><a href="https://grcodeclub.github.io/windows/orologia">Ορολογία</a></li>',
        '<li><a href="https://grcodeclub.github.io/windows/command">Γραμμή εντολών</a></li>',
        '<li><a href="https://grcodeclub.github.io/windows/command/powershell">PowerShell</a></li>',
        '<li><a href="https://grcodeclub.github.io/windows/more/run">Run Commands</a></li>',
        '<li><a href="https://grcodeclub.github.io/windows/more/language-id">Language ID</a></li>',
        '<li style="height: 200px;"></li>';
    ];
    
    var $sidebarMenuInners = document.querySelectorAll('.sidebarMenuInner');
    $sidebarMenuInners.forEach(function($sidebarMenuInner) {
    menuLinks.forEach(function(link) {
        $sidebarMenuInner.insertAdjacentHTML('beforeend', link);
    });
});
};
