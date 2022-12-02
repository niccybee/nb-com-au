<template>
  <main style="padding-top: 3rem" id="sig">
    <header class="header">
      <div>
        <h1>Email Signature Generator</h1>
        <p>
          A very rudimentary email signature generator I created to help speed up new
          employee onboarding. Use at your own risk. Borrows HTML from Hubspots generator.
          Maximise the "Input Information" area to generate.
        </p>
        <!-- <button @click="findAttributes()">Remove Attribute</button> -->
      </div>
      <a class="help" href="#docs" @click="showDocs = true">
        <div>?</div>
      </a>
    </header>
    <section class="sig-container">
      <h2>Signature 1 - No Promo</h2>
      <div class="minimise-button" @click="showSig1 = !showSig1">
        {{ showSig1 ? "Minimise -" : "Maximise +" }}
      </div>
      <div class="sig" ref="sig" v-show="showSig1">
        <table
          id="sig"
          cellpadding="0"
          cellspacing="0"
          style="
            vertical-align: -webkit-baseline-middle;
            font-size: medium;
            font-family: Arial;
          "
        >
          <tbody>
            <tr>
              <td>
                <table
                  cellpadding="0"
                  cellspacing="0"
                  style="
                    vertical-align: -webkit-baseline-middle;
                    font-size: medium;
                    font-family: Arial;
                  "
                >
                  <tbody>
                    <tr>
                      <td style="vertical-align: top">
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          style="
                            vertical-align: -webkit-baseline-middle;
                            font-size: medium;
                            font-family: Arial;
                          "
                        >
                          <tbody>
                            <tr>
                              <a :href="displayLink">
                                <td style="text-align: center">
                                  <img
                                    :src="displayImage"
                                    role="presentation"
                                    width="130"
                                    style="
                                      max-width: 128px;
                                      display: block;
                                      margin-right: 4px;
                                    "
                                  />
                                </td>
                              </a>
                            </tr>
                            <tr>
                              <td height="30"></td>
                            </tr>
                            <tr>
                              <td v-if="showSocial" style="text-align: center">
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  style="
                                    vertical-align: -webkit-baseline-middle;
                                    font-size: medium;
                                    font-family: Arial;
                                    display: inline-block;
                                  "
                                >
                                  <tbody>
                                    <tr style="text-align: center">
                                      <td>
                                        <a
                                          href="https://facebook.com/e2language"
                                          color="#517DFF"
                                          style="
                                            display: inline-block;
                                            padding: 0px;
                                            background-color: rgb(81, 125, 255);
                                          "
                                          ><img
                                            src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/facebook-icon-2x.png"
                                            alt="facebook"
                                            color="#517DFF"
                                            height="24"
                                            style="
                                              background-color: rgb(81, 125, 255);
                                              max-width: 135px;
                                              display: block;
                                            "
                                        /></a>
                                      </td>
                                      <td width="5">
                                        <div></div>
                                      </td>
                                      <td>
                                        <a
                                          href="https://twitter.com/e2language"
                                          color="#517DFF"
                                          style="
                                            display: inline-block;
                                            padding: 0px;
                                            background-color: rgb(81, 125, 255);
                                          "
                                          ><img
                                            src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/twitter-icon-2x.png"
                                            alt="twitter"
                                            color="#517DFF"
                                            height="24"
                                            style="
                                              background-color: rgb(81, 125, 255);
                                              max-width: 135px;
                                              display: block;
                                            "
                                        /></a>
                                      </td>
                                      <td width="5">
                                        <div></div>
                                      </td>
                                      <td>
                                        <a
                                          href="https://www.linkedin.com/company/e2language/mycompany/"
                                          color="#517DFF"
                                          style="
                                            display: inline-block;
                                            padding: 0px;
                                            background-color: rgb(81, 125, 255);
                                          "
                                          ><img
                                            src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon-2x.png"
                                            alt="linkedin"
                                            color="#517DFF"
                                            height="24"
                                            style="
                                              background-color: rgb(81, 125, 255);
                                              max-width: 135px;
                                              display: block;
                                            "
                                        /></a>
                                      </td>
                                      <td width="5">
                                        <div></div>
                                      </td>
                                      <td>
                                        <a
                                          href="https://instagram.com/e2language"
                                          color="#517DFF"
                                          style="
                                            display: inline-block;
                                            padding: 0px;
                                            background-color: rgb(81, 125, 255);
                                          "
                                          ><img
                                            src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/instagram-icon-2x.png"
                                            alt="instagram"
                                            color="#517DFF"
                                            height="24"
                                            style="
                                              background-color: rgb(81, 125, 255);
                                              max-width: 135px;
                                              display: block;
                                            "
                                        /></a>
                                      </td>
                                      <td width="5">
                                        <div></div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                      <td width="46">
                        <div></div>
                      </td>
                      <td style="padding: 0px; vertical-align: middle">
                        <h3
                          color="#12326E"
                          style="margin: 0px; font-size: 18px; color: rgb(18, 50, 110)"
                        >
                          <span>{{ name }}</span>
                        </h3>
                        <p
                          color="#12326E"
                          font-size="medium"
                          style="
                            margin: 0px;
                            color: rgb(18, 50, 110);
                            font-size: 14px;
                            line-height: 22px;
                          "
                        >
                          <span>{{ title }}</span>
                        </p>
                        <p
                          color="#12326E"
                          font-size="medium"
                          style="
                            margin: 0px;
                            font-weight: 500;
                            color: rgb(18, 50, 110);
                            font-size: 14px;
                            line-height: 22px;
                          "
                        >
                          <span>{{ dep }}</span
                          ><span>&nbsp;|&nbsp;</span><span>{{ companyName }}</span>
                        </p>
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          style="
                            vertical-align: -webkit-baseline-middle;
                            font-size: medium;
                            font-family: Arial;
                            width: 100%;
                          "
                        >
                          <tbody>
                            <tr>
                              <td height="30"></td>
                            </tr>
                            <tr>
                              <td
                                color="#67C3CD"
                                direction="horizontal"
                                height="1"
                                style="
                                  width: 100%;
                                  border-bottom: 1px solid rgb(103, 195, 205);
                                  border-left: none;
                                  display: block;
                                "
                              ></td>
                            </tr>
                            <tr>
                              <td>
                                <sub
                                  ><b style="color: #517dff">a: </b>Level 8, 22 Albert Rd,
                                  South Melbourne, 3205</sub
                                >
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <sub
                                  ><b style="color: #517dff">m: </b
                                  ><a style="color: #12326e" :href="'tel:' + phone">
                                    {{ phone }}
                                  </a></sub
                                >
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <sub
                                  ><b style="color: #517dff">e: </b
                                  ><a style="color: #12326e" :href="'mailto:' + email">
                                    {{ email }}
                                  </a></sub
                                >
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <section class="sig2-container">
      <h2>Signature 2 With Promo Image</h2>
      <div class="minimise-button" @click="showSig2 = !showSig2">
        {{ showSig2 ? "Minimise -" : "Maximise +" }}
      </div>
      <div class="sig2" ref="sig2" v-show="showSig2">
        <table
          id="sig2"
          cellpadding="0"
          cellspacing="0"
          style="
            vertical-align: -webkit-baseline-middle;
            font-size: medium;
            font-family: Arial;
          "
        >
          <tbody>
            <tr>
              <td>
                <table
                  cellpadding="0"
                  cellspacing="0"
                  style="
                    vertical-align: -webkit-baseline-middle;
                    font-size: medium;
                    font-family: Arial;
                  "
                >
                  <tbody>
                    <tr>
                      <td style="vertical-align: top">
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          style="
                            vertical-align: -webkit-baseline-middle;
                            font-size: medium;
                            font-family: Arial;
                          "
                        >
                          <tbody>
                            <tr>
                              <a :href="displayLink">
                                <td style="text-align: center">
                                  <img
                                    :src="displayImage"
                                    role="presentation"
                                    width="130"
                                    style="
                                      max-width: 128px;
                                      display: block;
                                      margin-right: 4px;
                                    "
                                  />
                                </td>
                              </a>
                            </tr>
                            <tr>
                              <td height="30"></td>
                            </tr>
                            <tr>
                              <td style="text-align: center">
                                <table
                                  v-if="showSocial"
                                  cellpadding="0"
                                  cellspacing="0"
                                  style="
                                    vertical-align: -webkit-baseline-middle;
                                    font-size: medium;
                                    font-family: Arial;
                                    display: inline-block;
                                  "
                                >
                                  <tbody>
                                    <tr style="text-align: center">
                                      <td>
                                        <a
                                          href="https://facebook.com/e2language"
                                          color="#517DFF"
                                          style="
                                            display: inline-block;
                                            padding: 0px;
                                            background-color: rgb(81, 125, 255);
                                          "
                                          ><img
                                            src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/facebook-icon-2x.png"
                                            alt="facebook"
                                            color="#517DFF"
                                            height="24"
                                            style="
                                              background-color: rgb(81, 125, 255);
                                              max-width: 135px;
                                              display: block;
                                            "
                                        /></a>
                                      </td>
                                      <td width="5">
                                        <div></div>
                                      </td>
                                      <td>
                                        <a
                                          href="https://twitter.com/e2language"
                                          color="#517DFF"
                                          style="
                                            display: inline-block;
                                            padding: 0px;
                                            background-color: rgb(81, 125, 255);
                                          "
                                          ><img
                                            src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/twitter-icon-2x.png"
                                            alt="twitter"
                                            color="#517DFF"
                                            height="24"
                                            style="
                                              background-color: rgb(81, 125, 255);
                                              max-width: 135px;
                                              display: block;
                                            "
                                        /></a>
                                      </td>
                                      <td width="5">
                                        <div></div>
                                      </td>
                                      <td>
                                        <a
                                          href="https://www.linkedin.com/company/e2language/mycompany/"
                                          color="#517DFF"
                                          style="
                                            display: inline-block;
                                            padding: 0px;
                                            background-color: rgb(81, 125, 255);
                                          "
                                          ><img
                                            src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon-2x.png"
                                            alt="linkedin"
                                            color="#517DFF"
                                            height="24"
                                            style="
                                              background-color: rgb(81, 125, 255);
                                              max-width: 135px;
                                              display: block;
                                            "
                                        /></a>
                                      </td>
                                      <td width="5">
                                        <div></div>
                                      </td>
                                      <td>
                                        <a
                                          href="https://instagram.com/e2language"
                                          color="#517DFF"
                                          style="
                                            display: inline-block;
                                            padding: 0px;
                                            background-color: rgb(81, 125, 255);
                                          "
                                          ><img
                                            src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/instagram-icon-2x.png"
                                            alt="instagram"
                                            color="#517DFF"
                                            height="24"
                                            style="
                                              background-color: rgb(81, 125, 255);
                                              max-width: 135px;
                                              display: block;
                                            "
                                        /></a>
                                      </td>
                                      <td width="5">
                                        <div></div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                      <td width="46">
                        <div></div>
                      </td>
                      <td style="padding: 0px; vertical-align: middle">
                        <h3
                          color="#12326E"
                          style="margin: 0px; font-size: 18px; color: rgb(18, 50, 110)"
                        >
                          <span>{{ name }}</span>
                        </h3>
                        <p
                          color="#12326E"
                          font-size="medium"
                          style="
                            margin: 0px;
                            color: rgb(18, 50, 110);
                            font-size: 14px;
                            line-height: 22px;
                          "
                        >
                          <span>{{ title }}</span>
                        </p>
                        <p
                          color="#12326E"
                          font-size="medium"
                          style="
                            margin: 0px;
                            font-weight: 500;
                            color: rgb(18, 50, 110);
                            font-size: 14px;
                            line-height: 22px;
                          "
                        >
                          <span>{{ dep }}</span
                          ><span>&nbsp;|&nbsp;</span><span>{{ companyName }}</span>
                        </p>
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          style="
                            vertical-align: -webkit-baseline-middle;
                            font-size: medium;
                            font-family: Arial;
                            width: 100%;
                          "
                        >
                          <tbody>
                            <tr>
                              <td height="30"></td>
                            </tr>
                            <tr>
                              <td
                                color="#67C3CD"
                                direction="horizontal"
                                height="1"
                                style="
                                  width: 100%;
                                  border-bottom: 1px solid rgb(103, 195, 205);
                                  border-left: none;
                                  display: block;
                                "
                              ></td>
                            </tr>
                            <tr>
                              <td>
                                <sub
                                  ><b style="color: #517dff">a: </b>Level 8, 22 Albert Rd,
                                  South Melbourne, 3205</sub
                                >
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <sub
                                  ><b style="color: #517dff">m: </b
                                  ><a style="color: #12326e" :href="'tel:' + phone">
                                    {{ phone }}
                                  </a></sub
                                >
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <sub
                                  ><b style="color: #517dff">e: </b
                                  ><a style="color: #12326e" :href="'mailto:' + email">
                                    {{ email }}
                                  </a></sub
                                >
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr v-if="e2lEmail">
              <td>
                <a :href="promoLink">
                  <img
                    style="width: 100%; max-width: 600px"
                    :src="promoImage"
                    alt="e2-signature-banner"
                  />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <div class="controls">
      <h2>Input Information:</h2>
      <div class="minimise-button" @click="showControlBox">
        {{ showControls ? "Minimise -" : "Maximise +" }}
      </div>
      <div class="control-container" v-if="showControls">
        <div class="inputs">
          <label @change="updateHTMLBox" for="fname">
            First Name: <br /><input type="text" placeholder="Enter..." v-model="fname"
          /></label>
          <label @change="updateHTMLBox" for="lname"
            >Last Name: <br /><input type="text" placeholder="Enter..." v-model="lname"
          /></label>
          <label @change="updateHTMLBox" for="title"
            >Job Title: <br /><input type="text" placeholder="Enter..." v-model="title"
          /></label>
          <label @change="updateHTMLBox" for="dep"
            >Company: <br /><input
              type="text"
              placeholder="Enter..."
              v-model="companyName"
          /></label>
          <label @change="updateHTMLBox" for="dep"
            >Team: <br /><input type="text" placeholder="Enter..." v-model="dep"
          /></label>
          <label @change="updateHTMLBox" for="email"
            >Email: <br /><input type="text" placeholder="Enter..." v-model="email"
          /></label>
          <label @change="updateHTMLBox" for=""
            >Phone Number: <br /><input
              type="text"
              placeholder="Enter..."
              v-model="phone"
          /></label>
          <br />
          <label @change="updateHTMLBox" for="promolink"
            >Display Image Link: <br /><input
              type="url"
              placeholder="https://"
              v-model="displayImage"
          /></label>
          <label @change="updateHTMLBox" for="promolink"
            >Display URL: <br /><input
              type="url"
              placeholder="https://"
              v-model="displayImage"
          /></label>
          <br />
          <label @change="updateHTMLBox" for="promolink"
            >Promo Image Link: <br /><input
              type="url"
              placeholder="https://"
              v-model="promoImage"
          /></label>
          <label @change="updateHTMLBox" for="promolink"
            >Promo URL: <br /><input
              type="url"
              placeholder="https://"
              v-model="promoLink"
          /></label>
          <div class="buttons">
            <!-- <button @click="copyHtml" v-if="showHtml">Copy HTML</button> -->
            <!-- <button @click="copyVis">Copy for Outlook</button> -->
            <label for="showHtml">
              <input v-model="showHtml" type="checkbox" name="showHtml" id="showHtml" />
              Show HTML output
            </label>
            <button @click="resetAll">Reset</button>
          </div>
        </div>

        <div :class="showHtml ? 'display-html' : 'display-html dn'">
          <div class="html-display">
            <h3>Signature 1 (No Promo)</h3>
            <textarea
              class="html-output"
              ref="htmlOutput"
              name=""
              id=""
              rows="10"
              v-model="copiedHtml"
            ></textarea>
            <button class="btn-green" @click="copyHtml" v-if="showHtml">Copy HTML</button>
          </div>
          <div class="html-display">
            <h3>Signature 2 (With Promo)</h3>
            <textarea
              class="html-output"
              ref="htmlOutput2"
              name=""
              id=""
              rows="10"
              v-model="copiedHtml2"
            ></textarea>
            <button class="btn-green" @click="copyHtml2" v-if="showHtml">
              Copy HTML
            </button>
          </div>
        </div>
      </div>
    </div>
    <div id="docs" class="display-docs">
      <div class="doc-banner">
        <h2>How can I add my email signature to my mail app?</h2>
        <div class="minimise-button" @click="showDocsBox">
          {{ showDocs ? "Minimise -" : "Maximise +" }}
        </div>
      </div>
      <Docs v-if="showDocs" class="docs" />
    </div>
    <div class="display" ref="display"></div>
    <div class="display" ref="display2"></div>
  </main>
</template>

<script>
import Docs from "../../components/add-ins/marketing/EmailSigDocs.vue";
export default {
  name: "App",
  layout: "new",
  components: {
    Docs,
  },
  computed: {
    name() {
      return this.fname + " " + this.lname;
    },
  },
  data() {
    return {
      fname: "",
      lname: "",
      title: "",
      dep: "",
      email: "",
      phone: "0400 000 000",
      copiedHtml: "Type in name or information boxes to display HTML",
      copiedHtml2: "Type in name or information boxes to display HTML",
      showHtml: true,
      showDocs: false,
      showControls: false,
      companyName: "Acme Corp",
      showSocial: false,
      social: {
        showTwitter: true,
        twitterHandle: "",
        showFB: true,
        FBHandle: "",
        showLinkedin: true,
        LinkedinHandle: "",
      },
      showSig1: true,
      showSig2: false,
      e2lEmail: true,
      displayImage: "https://picsum.photos/300/300",
      displayLink: "https://example.com",
      promoLink: "https://example.com",
      promoImage: "https://picsum.photos/1200/300",
    };
  },
  methods: {
    copyHtml() {
      this.showHtml = true;
      this.updateHTMLBox();
      this.$refs.htmlOutput.select();
      document.execCommand("copy");
      console.log(this.$refs.htmlOutput.value);
    },
    copyHtml2() {
      this.showHtml = true;
      this.updateHTMLBox2();
      this.$refs.htmlOutput2.select();
      document.execCommand("copy");
      console.log(this.$refs.htmlOutput2.value);
    },
    copyVis() {
      let element = this.$refs.display;
      element.contentEditable = true;
      let controlRange;
      if (document.createControlRange) {
        this.$refs.display.innerHTML = this.$refs.sig.innerHTML;
        controlRange = document.createControlRange();
        controlRange.addElement(element);
        document.execCommand("copy");
        console.log("it might have worked");
      } else {
        console.log("failure");
      }
    },
    updateHTMLBox() {
      this.copiedHtml = this.$refs.sig.innerHTML;
      this.updateHTMLBox2();
    },
    updateHTMLBox2() {
      this.copiedHtml2 = this.$refs.sig2.innerHTML;
    },
    findAttributes() {
      let html = this.$refs.sig.innerHTML;
      let test = /(data\-v\-)\w+/;
      let reg = new RegExp(test);
      let result = reg.exec(html);
      console.log("test string:", result[0]);
      console.log("after log");
      return;
    },
    showHtmlBox() {
      this.showHtml = !this.showHtml;
    },
    showControlBox() {
      this.showControls = !this.showControls;
    },
    resetAll() {
      this.fname = "";
      this.lname = "";
      this.title = "";
      this.dep = "";
      this.email = "";
      this.phone = 0;
      this.copiedHtml = "Type in name or information boxes to display HTML";
      this.displayImage = "https://picsum.photos/300/300";
      this.displayLink = "https://example.com";
      this.promoLink = "https://example.com";
      this.promoImage = "https://picsum.photos/1200/300";
    },
    showDocsBox() {
      this.showDocs = !this.showDocs;
    },
  },
};
</script>

<style scoped>
html {
  background-color: rgb(220, 228, 231);
}
h1,
h2,
h3 {
  color: rgb(5, 5, 36);
  margin-top: 0;
  margin-bottom: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
h3 {
  font-weight: 300;
}
header {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin: 1rem 2rem 1rem 2rem;
  padding: 2rem 2rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
input {
  border-radius: 10px;
  border: 1px rgba(211, 211, 211, 0.253) solid;
  box-shadow: 2px 2px rgba(90, 90, 90, 0.2);
  transition: all 0.2s ease-in-out;
}
input:hover {
  box-shadow: 2px 2px rgba(90, 90, 90, 0.2);
  transition: all 0.2s ease-in-out;
  background: rgb(243, 248, 255);
}
button {
  padding: 0.5rem 1rem;
  border-radius: 10px;
  background: rgb(255, 210, 210);
  border: 1px solid rgb(124, 118, 118);
  box-shadow: 2px 2px rgba(90, 90, 90, 0.2);
  box-sizing: border-box;
  width: 8rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
textarea {
  border-radius: 10px;
  padding: 1rem;
  width: 100%;
}
.btn-green {
  background: rgb(226, 247, 228);
  margin: 1rem;
  width: 100%;
}
.btn-green:hover {
  background: rgb(170, 219, 174);
}
button:hover {
  background: rgb(252, 158, 158);
  box-shadow: 4px 4px rgba(90, 90, 90, 0.2);
  transform: translatey(-2px);
  transition: all 0.2s ease-in-out;
}
.display-html {
  display: flex;
  box-sizing: border-box;
}
.html-display {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  padding: 2rem;
}
.dn {
  display: none;
  visibility: hidden;
}
.display-docs {
  position: relative;
  border-radius: 10px;
  padding: 2rem;
  margin: 1rem 4rem;
  background: rgb(243, 246, 247);
}
.controls {
  padding: 2rem;
  /* border: 1px solid black; */
  background: rgb(243, 246, 247);
  border-radius: 10px;
  margin: 1rem 4rem;
  position: relative;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
/* .controls * {
  border: solid 1px #c0c0c0;
} */
.minimise-button {
  position: absolute;
  right: 5px;
  top: 5px;
  text-transform: uppercase;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 0.8rem;
  background-color: rgb(211, 211, 211);
  color: black;
  padding: 0.3rem;
  opacity: 0.8;
  cursor: pointer;
  border-radius: 10px;
}
.minimise-button:hover {
  opacity: 1;
}
.inputs {
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
}
.buttons {
  padding: 0.5rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.sig {
  padding: 1rem;
  margin: 1rem;
  border-radius: 10px;
  background: white;
  border: solid 1px rgba(211, 211, 211, 0.5);
}
.sig-container {
  position: relative;
  padding: 0.5rem 1rem;
  margin: 1rem 4rem;
  border-radius: 10px;
  background: white;
  background: rgb(243, 246, 247);
}
.sig2-container {
  position: relative;
  padding: 1rem;
  margin: 1rem 4rem;
  border-radius: 10px;
  background: white;
  background: rgb(243, 246, 247);
}
.sig2 {
  padding: 1rem;
  margin: 1rem;
  border-radius: 10px;
  background: white;
  border: solid 1px rgba(211, 211, 211, 0.5);
}
label {
  margin: 0.5rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
input {
  padding: 1rem;
}
.help {
  font-size: 2rem;
  padding: 0.5rem;
  border-radius: 100px;
  background: white;
  box-shadow: 2px 2px rgba(90, 90, 90, 0.2);
  text-decoration: none;
}
.docs {
  padding: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
h2 {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue";
}
</style>
