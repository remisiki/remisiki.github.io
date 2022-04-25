import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
	SideBar,
	Footer,
	Flag,
	Folder
} from './widgets';
import { checkDarkMode } from './control/dark';
import { selectNavi, switchLang } from './widgets/NavigationBlock';

function InfoScreen() {
	const { t, i18n } = useTranslation();
	const sections = ["Languages", "Programming", "Interests"];
	useEffect(() => {
		selectNavi('profile');
		switchLang(i18n.language);
		checkDarkMode();
	}, []);
	return (
		<div>
			<div id="content" className="wrapper doc">
				<article>
					<h1>{t("ifh")}</h1>
					<p>{t("ifp0")}</p>
					<p><span className="yellow-marker-thin">{t("ifp1")}</span></p>
					<h2 id={sections[0]}>
						<span>{t("ifs0")}</span>
					</h2>
					<ul>
						<li>
							<Folder name={t("ifs0l0")} id="en1" />
							<Flag code="GB" />
							<Flag code="US" />
							<div className="fold-block" id="en1">
								<p>{t("ifenp0")}</p>
								<p>{t("ifenp1")}</p>
								<p>{t("ifenp2")}</p>
							</div>
						</li>
						<li>
							<Folder name={t("ifs0l1")} id="zh1" />
							<Flag code="CN" />
							<Flag code="TW" />
							<Flag code="HK" />
						
							<div className="fold-block" id="zh1">
								<ul>
									<li>
										<Folder name={t("ifs0l1l0")} id="zhcn" />
										<div className="fold-block" id="zhcn">
											<p>{t("ifcnp0")}</p>
										</div>
									</li>
									<li>
										<Folder name={t("ifs0l1l1")} id="zhsh" />
										<div className="fold-block" id="zhsh">
											<p>{t("ifshp0")}</p>
										</div>
									</li>
									<li>
										<Folder name={t("ifs0l1l2")} id="zhhk" />
										<div className="fold-block" id="zhhk">
											<p>{t("ifhkp0")}</p>
											<p>{t("ifhkp1")}</p>
										</div>
									</li>
								</ul>
							</div>
						</li>
						<li>
							<Folder name={t("ifs0l2")} id="ja1" />
							<Flag code="JP" />
							<div className="fold-block" id="ja1">
								<p>{t("ifjap0")}</p>
							</div>
						</li>
						<li>
							<Folder name={t("ifs0l3")} id="de1" />
							<Flag code="DE" />
							<div className="fold-block" id="de1">
								<p>{t("ifdep0")}</p>
							</div>
						</li>
					</ul>
					<h2 id={sections[1]}>
						<span>{t("ifs1")}</span>
					</h2>
					<ul>
						<li>
							<Folder name="C" id="c" />
							<div className="fold-block" id="c">
								<p className="brown-text">
									{t("futuu")}
								</p>
								<p>
									{t("c")}
								</p>
							</div>
						</li>
						<li>
							<Folder name="Pascal" id="pascal" />
							<div className="fold-block" id="pascal">
								<p className="green-text">
									{t("gut")}
								</p>
								<p className="red-text">
									{t("forget")}
								</p>
								<p>
									{t("pascal")}
								</p>
							</div>
						</li>
						<li>
							<Folder name="C++" id="cpp" />
							<div className="fold-block" id="cpp">
								<p className="green-text">
									{t("gut")}
								</p>
								<p className="red-text">
									{t("forget")}
								</p>
								<p>
									{t("cpp")}
								</p>
							</div>
						</li>
						<li>
							<Folder name="Java" id="java" />
							<div className="fold-block" id="java">
								<p className="brown-text">
									{t("futuu")}
								</p>
								<p>
									{t("java")}
								</p>
							</div>
						</li>
						<li>
							<Folder name="Scala" id="scala" />
							<div className="fold-block" id="scala"> <p className="red-text">
									{t("bad")}
								</p>
								<p>
									{t("scala")}
								</p>
							</div>
						</li>
						<li>
							<Folder name="Python" id="python" />
							<div className="fold-block" id="python">
								<p className="green-text">
									{t("gut")}
								</p>
								<p>
									{t("python")}
								</p>
							</div>
						</li>
						<li>
							<Folder name="RISC-V Assembly" id="riscv" />
							<div className="fold-block" id="riscv">
								<p className="red-text">
									{t("bad")}
								</p>
								<p>
									{t("riscv")}
								</p>
							</div>
						</li>
						<li>
							<Folder name="Verilog" id="verilog" />
							<div className="fold-block" id="verilog">
								<p className="green-text">
									{t("gut")}
								</p>
								<p>
									{t("verilog")}
								</p>
							</div>
						</li>
						<li>
							<Folder name="Visual Basic" id="vb" />
							<div className="fold-block" id="vb">
								<p className="brown-text">
									{t("futuu")}
								</p>
								<p>
									{t("vb")}
								</p>
							</div>
						</li>
						<li>
							<Folder name="JavaScript" id="javascript" />
							<div className="fold-block" id="javascript">
								<p className="green-text">
									{t("gut")}
								</p>
								<p>
									{t("javascript")}
								</p>
							</div>
						</li>
					</ul>
					<p>
						<span className="yellow-marker-thin">{t("ifp2")}</span>
					</p>
					<ul>
						<li>{t("ifp2l0")}</li>
						<li>{t("ifp2l1")}</li>
						<li>{t("ifp2l2")}</li>
					</ul>
					<h2 id={sections[2]}>
						<span>{t("ifs2")}</span>
					</h2>
					<ul>
						<li>
							<Folder name={t("ifs2l0")} id="ifstg" />
							<div className="fold-block" id="ifstg">
								<ul>
									<li>
										<Folder name={t("ifs2l0l0")} id="ifstgth" />
										<div className="fold-block" id="ifstgth">
											<p>{t("ifs2l0l0p0")}</p>
											<p>{t("ifs2l0l0p1")}</p>
											<p>{t("ifs2l0l0p2")}</p>
										</div>
									</li>
									<li>
										<Folder name={t("ifs2l0l1")} id="ifstgca" />
										<div className="fold-block" id="ifstgca">
											<p>{t("ifs2l0l1p0")}</p>
											<p>{t("ifs2l0l1p1")}</p>
										</div>
									</li>
								</ul>
							</div>
						</li>
						<li>
							<Folder name={t("ifs2l1")} id="ifmtr" />
							<div className="fold-block" id="ifmtr">
								<ul>
									<li>
										<Folder name={t("ifs2l1l0")} id="ifmtrhk" />
										<div className="fold-block" id="ifmtrhk">
											<p>{t("ifs2l1l0p0")}</p>
										</div>
									</li>
									<li>
										<Folder name={t("ifs2l1l1")} id="ifmtrel" />
										<div className="fold-block" id="ifmtrel">
											<p>{t("ifs2l1l1p0")}</p>
											<p>{t("ifs2l1l1p1")}</p>
										</div>
									</li>
									<li>
										<Folder name={t("ifs2l1l2")} id="ifmtror" />
										<div className="fold-block" id="ifmtror">
											<p>{t("ifs2l1l2p0")}</p>
										</div>
									</li>
								</ul>
							</div>
						</li>
						<li>
							<Folder name={t("ifs2l2")} id="ifog" />
							<div className="fold-block" id="ifog">
								<ul>
									<li>
										<Folder name={t("ifs2l2l0")} id="ifogsg" />
										<div className="fold-block" id="ifogsg">
											<p>{t("ifs2l2l0p0")}</p>
											<p>{t("ifs2l2l0p1")}</p>
										</div>
									</li>
									<li>
										<Folder name={t("ifs2l2l1")} id="ifogsg0" />
										<div className="fold-block" id="ifogsg0">
											<p>{t("ifs2l2l1p0")}</p>
											<p>{t("ifs2l2l1p1")}</p>
											<p>{t("ifs2l2l1p2")}</p>
										</div>
									</li>
									<li>
										<Folder name={t("ifs2l2l2")} id="ifoghtr" />
										<div className="fold-block" id="ifoghtr">
											<p>{t("ifs2l2l2p0")}</p>
											<p>{t("ifs2l2l2p1")}</p>
										</div>
									</li>
								</ul>
							</div>
						</li>
						<li>
							<Folder name={t("ifs2l3")} id="ifanm" />
							<div className="fold-block" id="ifanm">
								<ul>
									<li>
										<Folder name={t("ifs2l3l0")} id="ifanmsg" />
										<div className="fold-block" id="ifanmsg">
											<p>{t("ifs2l3l0p0")}</p>
											<p>{t("ifs2l3l0p1")}</p>
											<p>{t("ifs2l3l0p2")}</p>
										</div>
									</li>
									<li>
										<Folder name={t("ifs2l3l1")} id="ifanmpsy" />
										<div className="fold-block" id="ifanmpsy">
											<p>{t("ifs2l3l1p0")}</p>
										</div>
									</li>
									<li>
										<Folder name={t("ifs2l3l2")} id="ifanmmg" />
										<div className="fold-block" id="ifanmmg">
											<p>{t("ifs2l3l2p0")}</p>
										</div>
									</li>
								</ul>
							</div>
						</li>
					</ul>
				</article>
				
				<SideBar sections={sections} tool={true} path="profile" />
				<div className="gap"></div>
			</div>
			<Footer />
		</div>
	);
}

export default InfoScreen;