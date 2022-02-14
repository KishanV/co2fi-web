# Build instructions For Front End

<b>There are two ways of building and running frontend.</b>

1. Build and Run with Next.js it self.
2. Build and Export as static html project then run it on any web server.

These method are described bellow in depth. but there are some prerequisite steps also need be to followed first.
<br/><br/><br/>

# 1) Install Latest Versions of NPM & Node.Js

Doc for NPM & Node.Js:
https://nodejs.org/en/<br/><br/><br/>

# 2) Install dependency

Goto <b>`repository root`</b> directory.<br/>
now use command <b>`npm run install-dependencies`</b>. it will install all dependency.<br/><br/><br/>

# 3) Build instruction

you can have two option as its written at starting of this doc. you can read more in details bellows.<br/><br/>

### <b>1) Build and Run with Next.js it self.</b>

Use this command for build <b>`npm run build-and-run`</b>. by this command you will be able to run frontend directly on port 8080. <br/><br/>
<b>`Do you want to run it on any other port?`</b><br/>
If yes, you will be able to do it by just replacing with `8080` with any other port that you may want inside `package.json` file at line number 10.<br/><br/>

### <b>2) Build and Export as static html project then run it on any web server.</b>

Use this command for build <b>`npm run build-and-export`</b>. it will generate html project in <b>`ui/out`</b> directory.<br/>Now you can use these build files in any other web server that you want.

