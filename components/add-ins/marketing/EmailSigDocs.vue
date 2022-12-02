<template>
  <div class="docs">
    <div v-html="docsSource"></div>
  </div>
</template>

<script>
export default {
  name: "Docs",
  data() {
    return {
      docsSource: `<div class="result-html full-height"><h2>How do I add my new email signature to Gmail?</h2>
<ol>
<li>
<p>Go to gmail.com and log in to your email account.</p>
</li>
<li>
<p>Click the cog in the top right corner, and select ‘settings’ from the drop down menu</p>
</li>
<li>
<p>Scroll down until you reach the email signature editor, then paste your new email signature there.</p>
</li>
<li>
<p>Scroll to the bottom of the page and click ‘save changes’.</p>
</li>
</ol>
<h2>How do I add my new email signature to Outlook?</h2>
<ol>
<li>
<p>Open Outlook.</p>
</li>
<li>
<p>In the top left corner, click ‘file’ and then ‘options’.</p>
</li>
<li>
<p>From the ‘options’ menu, select ‘mail’.</p>
</li>
<li>
<p>Click ‘signatures’ and choose the signature you want to create/edit.</p>
</li>
<li>
<p>Paste the HTML output (below the name inputs) into your new email signature and choose your preferences, then save your changes.</p>
</li>
<li>
<p>If you’re having problems, try copying the source code instead. Instructions on how to do that can be<br>
found at the bottom of this page.</p>
</li>
</ol>
<h2>How do I add my new email signature to Apple Mail? (OS X El Capitan 10.11)</h2>
<ol>
<li>
<p>In Apple Mail, click ‘mail’ and then ‘preferences’ in the top left corner of your screen</p>
</li>
<li>
<p>From the preferences pop-up, click the ‘signatures’ tab.</p>
</li>
<li>
<p>Click the ‘+’ button at the bottom of the middle column.</p>
</li>
<li>
<p>Paste your new email signature into the right-hand column and close the pop-up window to save.</p>
</li>
</ol>
<h2>I’m on mobile - how do I select and copy my signature?</h2>
<p>As the ‘select signature’ button is not available on mobile devices, copying and pasting your signature is a little different on mobile. Here’s how to do it:</p>
<ol>
<li>
<p>On mobile, you need to select your signature manually before copying it to your clipboard. To ensure you highlight all of your signature – including all the styling codes – select the signature along with the line above and below your signature.</p>
</li>
<li>
<p>Click ‘copy’ and then paste it into your email client’s signature editor.<br>
NOTE: Some mobile devices only paste text by default; IOS is typical of this. You must paste your signature, then shake the device to be given the option to undo the formatting changes and ensure your signature looks the way you intended.</p>
</li>
</ol>
<h2>Why doesn’t my email signature look as expected?</h2>
<p>If your signature doesn’t look as expected, don’t worry, this can be fixed easily enough. Here’s some<br>
solutions to try:</p>
<ul>
<li>
<p>Try using a different web browser to create your signature. Some web browsers don’t copy the formatting<br>
along with the text and this changes with each update of the browsers.</p>
</li>
<li>
<p>Copy the source code of your signature and paste that directly into your email client’s signature file. To do that, generate your signature and click on the ‘show HTML’ button. A text box appear containing the properly formatted source code of your email signature. Copy your source code and follow the instructions which apply to your email client.</p>
</li>
</ul>
</div>`,
    };
  },
  computed: {},
};
</script>

<style></style>
