import licenseList from "license-list;

licenseList('.', {
  dev: false
}).then((packages) => {
  const pkgInfo = packages['license-list@0.1.0'];
  console.log(pkgInfo);
});