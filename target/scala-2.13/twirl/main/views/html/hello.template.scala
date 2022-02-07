
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

object hello extends _root_.play.twirl.api.BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,_root_.play.twirl.api.Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with _root_.play.twirl.api.Template2[String,AssetsFinder,play.twirl.api.HtmlFormat.Appendable] {

  /**/
  def apply/*1.2*/(name: String)(implicit assetsFinder: AssetsFinder):play.twirl.api.HtmlFormat.Appendable = {
    _display_ {
      {


Seq[Any](format.raw/*1.53*/("""

"""),_display_(/*3.2*/main("Hello")/*3.15*/ {_display_(Seq[Any](format.raw/*3.17*/("""
    """),format.raw/*4.5*/("""<section id="top">
        <div class="wrapper">
            <h1>E? Hello World """),_display_(/*6.33*/name),format.raw/*6.37*/("""</h1>
        </div>
    </section>
""")))}))
      }
    }
  }

  def render(name:String,assetsFinder:AssetsFinder): play.twirl.api.HtmlFormat.Appendable = apply(name)(assetsFinder)

  def f:((String) => (AssetsFinder) => play.twirl.api.HtmlFormat.Appendable) = (name) => (assetsFinder) => apply(name)(assetsFinder)

  def ref: this.type = this

}


              /*
                  -- GENERATED --
                  SOURCE: app/views/hello.scala.html
                  HASH: 4a6372aa1276e3fb47f0db0bcbd29541caa82710
                  MATRIX: 742->1|888->52|918->57|939->70|978->72|1010->78|1119->161|1143->165
                  LINES: 21->1|26->1|28->3|28->3|28->3|29->4|31->6|31->6
                  -- GENERATED --
              */
          