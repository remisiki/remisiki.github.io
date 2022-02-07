
package views.html

import _root_.play.twirl.api.TwirlFeatureImports._
import _root_.play.twirl.api.TwirlHelperImports._
import _root_.play.twirl.api.Html
import _root_.play.twirl.api.JavaScript
import _root_.play.twirl.api.Txt
import _root_.play.twirl.api.Xml
import models._
import controllers._
import play.api.i18n._
import views.html._
import play.api.templates.PlayMagic._
import play.api.mvc._
import play.api.data._

object welcome extends _root_.play.twirl.api.BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,_root_.play.twirl.api.Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with _root_.play.twirl.api.Template2[String,String,play.twirl.api.HtmlFormat.Appendable] {

  /**/
  def apply/*1.2*/(message: String, style: String = "scala"):play.twirl.api.HtmlFormat.Appendable = {
    _display_ {
      {


Seq[Any](format.raw/*1.44*/(""" 

"""),_display_(/*3.2*/defining(play.core.PlayVersion.current)/*3.41*/ { version =>_display_(Seq[Any](format.raw/*3.54*/("""

"""),format.raw/*5.1*/("""<section id="top">
  <div class="wrapper">
    <!-- <h1><a href="https://playframework.com/documentation/"""),_display_(/*7.64*/version),format.raw/*7.71*/("""/Home">"""),_display_(/*7.79*/message),format.raw/*7.86*/("""</a></h1> -->
    <h1><a>"""),_display_(/*8.13*/message),format.raw/*8.20*/("""</a></h1>
  </div>
</section>

<div id="content" class="wrapper doc">
<article>

  <h1 id="commands">Commands</h1>
  <ul>
    <li><p>
      <code>/start</code> - Greet with kettyan and start using. 
    </p></li>

    <li><p>
      <code>/help</code> - See help message. 
      
    </p></li>

    <li><p>
      <code>/r0</code> - Randomly pick one illust id from <a href="https://pixiv.net">Pixiv</a>. Theoretically, the illust will be safe for work, but in case that the illust is R-18, a <a>#NSFW</a> (not safe for work) tag may be added in the caption. 
    </p>
    <p>
      The illust id may contain multiple images, and all of them (no more than 10) will be sent to the user. If the total number of images is larger than 10, only the first 10 of them will be sent. The returned images are in compressed <code>jpg</code> format, and original files can be accessed from the pixiv link attached with the images.
    </p>
    <p>
      Time to fetch the images depends on server conditions and varies from 1s to 20s. If no images are returned after 30s, the command will be dumped due to timeout.
    </p></li>

    <li><p>
      <code>/r18</code> - Randomly pick one R-18 illust id from <a href="https://pixiv.net">Pixiv</a>. A <a>#NSFW</a> (not safe for work) tag will be added in the caption.
    </p>
    <p>
      The illust id may contain multiple images, and all of them (no more than 10) will be sent to the user. If the total number of images is larger than 10, only the first 10 of them will be sent. The returned images are in compressed <code>jpg</code> format, and original files can be accessed from the pixiv link attached with the image.
    </p>
    <p>
      Time to fetch the images depends on server conditions and varies from 1s to 20s. If no images are returned after 30s, the command will be dumped due to timeout.
    </p></li>
    <li><p>
      <code>/d</code> - Roll a die. A telegram dice object will be returned.
    </p></li>
  </ul>
  <blockquote>
    <p><strong>Testing features:</strong></p>
    <ol>
      <li><code>/r0 &lt;n&gt;</code> Call <code>/r0</code> for n times (1&le;n&le;10).
        <br><strong>e.g.</strong> <code>/r0 5</code> will request 5 illust ids, each returning one image only.</li>
      <li><code>/r18 &lt;n&gt;</code> Call <code>/r18</code> for n times (1&le;n&le;10).
        <br><strong>e.g.</strong> <code>/r18 5</code> will request 5 R-18 illust ids, each returning one image only.</li>
    </ol>
    <br>
    <strong>P.S.</strong> The above features are not recommended to use, since clicking the command button for multiple times will definitely be faster than calling the parameters.
  </blockquote>

  <h1>Direct Message</h1>

    <p>
      Users may send direct messages to kettyan for different usages:
    </p>
    <ul>
      <li><a href="#pid">Get illust by pixiv id</a></li>
      <li><a href="#tagsearch">Search pixiv illust by tags or keywords</a></li>
      <li><a href="#imgsearch">Find similar illust</a></li>
      <li><a href="#sticker">Convert telegram stickers to images</a></li>
    </ul>

  <h2 id="pid">Get illust by pixiv id</h2>
    <blockquote>
      <p><strong>What is a pixiv id?</strong></p>
      <p>A pixiv illust id is the unique identifier for the illust. The pixiv id may be found in the pixiv url.</p>
      <p><strong>e.g.</strong> url: https://www.pixiv.net/artworks/12345678, id: 12345678</p>
      <p><strong>e.g.</strong> url: https://www.pixiv.net/member_illust.php?mode=medium&illust_id=33445566, id: 33445566</p>
    </blockquote>
    <p>
      When a digit number is sent to kettyan, kettyan will regard it as a pixiv id and try to return the images of this illust id. Kettyan will tell the user if the pixiv id is invalid (no such id).
    </p>
    <p>
      URLs with <code>https://www.pixiv.net/artworks/xxxxxxxx</code> format can also be sent to kettyan, which will be recognized as a pixiv id. Forwarded messages are also supported as long as the url is contained in the text and no images are sent together with the text (images are handled in <a href="imgsearch"></a>).
    </p>
    <h3>Examples</h3>
      <p><strong>Acceptable</strong></p>
      <ul>
        <li>93983800</li>
        <li>https://www.pixiv.net/artworks/83468695</li>
        <li>ふにゃあああ～ https://www.pixiv.net/artworks/96058824いいね</li>
      </ul>
      <p><strong>Invalid</strong></p>
      <ul>
        <li>p86278368</li>
        <li>pixiv.net/artworks/95714360</li>
        <li>Images</li>
      </ul>

  <h2 id="tagsearch">Search pixiv illust by tags or keywords</h2>
  <h2 id="imgsearch">Find similar illust</h2>
  <h2 id="sticker">Convert telegram stickers to images</h2>
<!-- 
    <pre><code># Home page
GET     /               controllers.HomeController.index</code></pre>

    <p>
      Play has invoked the <code>controllers.HomeController.index</code> method to obtain the <code>Action</code> to execute:
    </p>

    <pre><code>def index = Action """),format.raw/*111.35*/("""{"""),format.raw/*111.36*/("""
  """),format.raw/*112.3*/("""Ok(views.html.index("Your new application is ready."))
"""),format.raw/*113.1*/("""}"""),format.raw/*113.2*/("""</code></pre>

    <p>
      An action is a function that handles the incoming HTTP request, and returns the HTTP result to send back to the web client.
      Here we send a <code>200 OK</code> response, using a template to fill its content.
    </p>

    <p>
      The template is defined in the <code>app/views/index.scala.html</code> file and compiled as a Scala function.
    </p>

    <pre><code>@(message: String)(implicit assetsFinder: AssetsFinder)

@main("Welcome to Play") """),format.raw/*126.27*/("""{"""),format.raw/*126.28*/("""

    """),format.raw/*128.5*/("""@welcome(message, style = "scala")

"""),format.raw/*130.1*/("""}"""),format.raw/*130.2*/("""</code></pre>

    <p>
      The first line of the template defines the function signature. Here it just takes a single <code>String</code> parameter.
      This template then calls another function defined in <code>app/views/main.scala.html</code>, which displays the HTML
      layout, and another function that displays this welcome message. You can freely add any HTML fragment mixed with Scala
      code in this file.
    </p>

    <p>You can read more about <a href="https://www.playframework.com/documentation/"""),_display_(/*139.86*/version),format.raw/*139.93*/("""/ScalaTemplates">Twirl</a>, the template language used by Play, and how Play handles <a href="https://www.playframework.com/documentation/"""),_display_(/*139.232*/version),format.raw/*139.239*/("""/ScalaActions">actions</a>.</p>

    <h2>Async Controller</h2>

    Now that you've seen how Play renders a page, take a look at <code>AsyncController.scala</code>, which shows how to do asynchronous programming when handling a request.  The code is almost exactly the same as <code>HomeController.scala</code>, but instead of returning <code>Result</code>, the action returns <code>Future[String]</code> to Play.  When the execution completes, Play can use a thread to render the result without blocking the thread in the mean time.

    <p>
        <a href=""""),_display_(/*146.19*/routes/*146.25*/.AsyncController.message),format.raw/*146.49*/("""">Click here for the AsyncController action!</a>
    </p>

    <p>
        You can read more about <a href="https://www.playframework.com/documentation/"""),_display_(/*150.87*/version),format.raw/*150.94*/("""/ScalaAsync">asynchronous actions</a> in the documentation.
    </p>

    <h2>Count Controller</h2>

    <p>
        Both the HomeController and AsyncController are very simple, and typically controllers present the results of the interaction of several services.  As an example, see the <code>CountController</code>, which shows how to inject a component into a controller and use the component when handling requests.  The count controller increments every time you refresh the page, so keep refreshing to see the numbers go up.
    </p>

    <p>
        <a href=""""),_display_(/*160.19*/routes/*160.25*/.CountController.count),format.raw/*160.47*/("""">Click here for the CountController action!</a>
    </p>

    <p>
        You can read more about <a href="https://www.playframework.com/documentation/"""),_display_(/*164.87*/version),format.raw/*164.94*/("""/ScalaDependencyInjection">dependency injection</a> in the documentation.
    </p>

    <h2>Need more info on the console?</h2>

  <p>
    For more information on the various commands you can run on Play, i.e. running tests and packaging applications for production, see <a href="https://playframework.com/documentation/"""),_display_(/*170.187*/version),format.raw/*170.194*/("""/PlayConsole">Using the Play console</a>.
  </p>  

  <h2>Need to set up an IDE?</h2>

  <p>
      You can start hacking your application right now using any text editor. Any changes will be automatically reloaded at each page refresh, 
      including modifications made to Scala source files.
  </p>

  <p>
      If you want to set-up your application in <strong>IntelliJ IDEA</strong> or any other Java IDE, check the 
      <a href="https://www.playframework.com/documentation/"""),_display_(/*182.61*/version),format.raw/*182.68*/("""/IDE">Setting up your preferred IDE</a> page.
  </p>

  <h2>Need more documentation?</h2>

  <p>
    Play documentation is available at <a href="https://www.playframework.com/documentation/"""),_display_(/*188.94*/version),format.raw/*188.101*/("""">https://www.playframework.com/documentation</a>.
  </p>

  <p>
    Play comes with lots of example templates showcasing various bits of Play functionality at <a href="https://www.playframework.com/download#examples">https://www.playframework.com/download#examples</a>.
  </p>

  <h2>Need more help?</h2>

  <p>
    Play questions are asked and answered on Stackoverflow using the "playframework" tag: <a href="https://stackoverflow.com/questions/tagged/playframework">https://stackoverflow.com/questions/tagged/playframework</a>
  </p>

  <p>
    The <a href="https://discuss.playframework.com">Discuss Play Forum</a> is where Play users come to seek help,
    announce projects, and discuss issues and new features.
  </p>

  <p>
    Gitter is a real time chat channel, like IRC. The <a href="https://gitter.im/playframework/playframework">playframework/playframework</a>  channel is used by Play users to discuss the ins and outs of writing great Play applications.
  </p>
  -->
</article>

<aside class="sidebar">
  <h3>Contents</h3>
  <ul>
    <!-- <li><a href="https://playframework.com/documentation/"""),_display_(/*215.64*/version),format.raw/*215.71*/("""">Documentation</a></li> -->
    <a href="#commands">Command List</a>
    <a href="#pid">Get by Pixiv ID</a>
    <a href="#tagsearch">Search by Tags</a>
    <a href="#imgsearch">Search by Image</a>
    <a href="#sticker">Convert Stickers</a>
    <!-- <li><a href="https://playframework.com/documentation/"""),_display_(/*221.64*/version),format.raw/*221.71*/("""/api/"""),_display_(/*221.77*/style),format.raw/*221.82*/("""/index.html">Browse the """),_display_(/*221.107*/{style.capitalize}),format.raw/*221.125*/(""" """),format.raw/*221.126*/("""API</a></li> -->
  </ul>
  <!-- <h3>Start here</h3>
  <ul>
    <li><a href="https://playframework.com/documentation/"""),_display_(/*225.59*/version),format.raw/*225.66*/("""/PlayConsole">Using the Play console</a></li>
    <li><a href="https://playframework.com/documentation/"""),_display_(/*226.59*/version),format.raw/*226.66*/("""/IDE">Setting up your preferred IDE</a></li>
    <li><a href="https://playframework.com/download#examples">Example Projects</a>
  </ul>
  <h3>Help here</h3>
  <ul>
    <li><a href="https://stackoverflow.com/questions/tagged/playframework">Stack Overflow</a></li>
    <li><a href="https://discuss.playframework.com">Discuss Play Forum</a> </li>
    <li><a href="https://gitter.im/playframework/playframework">Gitter Channel</a></li>
  </ul> -->
  
</aside>

</div>
""")))}),format.raw/*239.2*/("""
"""))
      }
    }
  }

  def render(message:String,style:String): play.twirl.api.HtmlFormat.Appendable = apply(message,style)

  def f:((String,String) => play.twirl.api.HtmlFormat.Appendable) = (message,style) => apply(message,style)

  def ref: this.type = this

}


              /*
                  -- GENERATED --
                  SOURCE: app/views/welcome.scala.html
                  HASH: 18f3cf537d9cb7caa04f7c735c171cb5c78ab906
                  MATRIX: 738->1|875->43|904->47|951->86|1001->99|1029->101|1161->207|1188->214|1222->222|1249->229|1301->255|1328->262|6298->5203|6328->5204|6359->5207|6442->5262|6471->5263|6983->5748|7013->5749|7047->5755|7111->5792|7140->5793|7687->6312|7716->6319|7884->6458|7914->6465|8503->7026|8519->7032|8565->7056|8746->7209|8775->7216|9370->7783|9386->7789|9430->7811|9611->7964|9640->7971|9990->8292|10020->8299|10530->8781|10559->8788|10777->8978|10807->8985|11944->10094|11973->10101|12306->10406|12335->10413|12369->10419|12396->10424|12450->10449|12491->10467|12522->10468|12667->10585|12696->10592|12828->10696|12857->10703|13353->11168
                  LINES: 21->1|26->1|28->3|28->3|28->3|30->5|32->7|32->7|32->7|32->7|33->8|33->8|136->111|136->111|137->112|138->113|138->113|151->126|151->126|153->128|155->130|155->130|164->139|164->139|164->139|164->139|171->146|171->146|171->146|175->150|175->150|185->160|185->160|185->160|189->164|189->164|195->170|195->170|207->182|207->182|213->188|213->188|240->215|240->215|246->221|246->221|246->221|246->221|246->221|246->221|246->221|250->225|250->225|251->226|251->226|264->239
                  -- GENERATED --
              */
          