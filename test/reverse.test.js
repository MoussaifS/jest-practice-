const reverse = require('/home/duck/Desktop/Testing_Practice/code/reverse')

test("reverse the string", () => {
    expect(reverse("skm")).toMatch("mks")
    expect(reverse("duck")).toMatch("kcud")
    expect(reverse("ManGo")).toMatch("oGnaM")
})
