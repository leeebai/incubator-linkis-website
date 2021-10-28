import{o as e,c as l,b as n,e as t,r as a,l as i,u as o}from"./vendor.1180558b.js";var u="/assets/global_history_interface.68d7d00e.png",s="/assets/global_history_query_button.c9058b17.png",r="/assets/task_execution_log_of_a_single_task.cf40fba8.png",c="/assets/administrator_view.7c4869c3.png",m="/assets/resource_management_interface.1334783f.png",p="/assets/parameter_configuration_interface.6160c166.png",g="/assets/edit_directory.410557fd.png",h="/assets/new_application_type.90ca0c6b.png",d="/assets/global_variable_interface.734e4b18.png",b="/assets/ECM_management_interface.764982ae.png",k="/assets/ECM_editing_interface.a82c51cd.png",f="/assets/click_the_instance_name_to_view_engine_information.9b608268.png",q="/assets/ECM_all_engine_information.4b4099f5.png",E="/assets/microservice_management_interface.9a76ac41.png",v="/assets/eureka_registration_center.261760f0.png";const C={class:"markdown-body"},y=[n("h1",null,"Introduction to Computatoin Governance Console",-1),n("blockquote",null,[n("p",null,"Linkis1.0 has added a new Computatoin Governance Console page, which can provide users with an interactive UI interface for viewing the execution of Linkis tasks, custom parameter configuration, engine health status, resource surplus, etc, and then simplify user development and management efforts.")],-1),n("h1",null,"Structure of Computatoin Governance Console",-1),n("blockquote",null,[n("p",null,"The Computatoin Governance Console is mainly composed of the following functional pages:")],-1),n("p",null,[t("-"),n("a",{href:"#Global_History"},"Global History")],-1),n("p",null,[t("-"),n("a",{href:"#Resource_management"},"Resource Management")],-1),n("p",null,[t("-"),n("a",{href:"#Parameter_Configuration"},"Parameter Configuration")],-1),n("p",null,[t("-"),n("a",{href:"#Global_Variables"},"Global Variables")],-1),n("p",null,[t("-"),n("a",{href:"#ECM_management"},"ECM Management"),t(" (Only visible to linkis computing management console administrators)")],-1),n("p",null,[t("-"),n("a",{href:"#Microservice_management"},"Microservice Management"),t(" (Only visible to linkis computing management console administrators)")],-1),n("p",null,[t("-"),n("a",{href:"#FAQ"},"FAQ")],-1),n("blockquote",null,[n("p",null,"Global history, resource management, parameter configuration, and global variables are visible to all users, while ECM management and microservice management are only visible to linkis computing management console administrators.")],-1),n("blockquote",null,[n("p",null,"The administrator of the Linkis computing management desk can configure through the following parameters in linkis.properties:")],-1),n("blockquote",null,[n("p",null,"`` wds.linkis.governance.station.admin=hadoop (multiple administrator usernames are separated by ‘,’)‘’")],-1),n("h1",null,"Introduction to the functions and use of Computatoin Governance Console",-1),n("h2",null,"Global history",-1),n("blockquote",null,[n("p",null,[n("img",{src:u,alt:""})])],-1),n("blockquote",null,[n("p",null,"The global history interface provides the user’s own linkis task submission record. The execution status of each task can be displayed here, and the reason for the failure of task execution can also be queried by clicking the view button on the left side of the task")],-1),n("blockquote",null,[n("p",null,[n("img",{src:s,alt:"./media/image2.png"})])],-1),n("blockquote",null,[n("p",null,[n("img",{src:r,alt:"./media/image3.png"})])],-1),n("blockquote",null,[n("p",null,"For linkis computing management console administrators, the administrator can view the historical tasks of all users by clicking the switch administrator view on the page.")],-1),n("blockquote",null,[n("p",null,[n("img",{src:c,alt:"./media/image4.png"})])],-1),n("h2",null,"Resource management",-1),n("blockquote",null,[n("p",null,"In the resource management interface, the user can see the status of the engine currently started and the status of resource occupation, and can also stop the engine through the page.")],-1),n("blockquote",null,[n("p",null,[n("img",{src:m,alt:"./media/image5.png"})])],-1),n("h2",null,"Parameter configuration",-1),n("blockquote",null,[n("p",null,"The parameter configuration interface provides the function of user-defined parameter management. The user can manage the related configuration of the engine in this interface, and the administrator can add application types and engines here.")],-1),n("blockquote",null,[n("p",null,[n("img",{src:p,alt:"./media/image6.png"})])],-1),n("blockquote",null,[n("p",null,"The user can expand all the configuration information in the directory by clicking on the application type at the top and then select the engine type in the application, modify the configuration information and click “Save” to take effect.")],-1),n("blockquote",null,[n("p",null,"Edit catalog and new application types are only visible to the administrator. Click the edit button to delete the existing application and engine configuration (note! Deleting the application directly will delete all engine configurations under the application and cannot be restored), or add an engine, or click “New Application” to add a new application type.")],-1),n("blockquote",null,[n("p",null,[n("img",{src:g,alt:"./media/image7.png"})])],-1),n("blockquote",null,[n("p",null,[n("img",{src:h,alt:"./media/image8.png"})])],-1),n("h2",null,"Global variable",-1),n("blockquote",null,[n("p",null,"In the global variable interface, users can customize variables for code writing, just click the edit button to add parameters.")],-1),n("blockquote",null,[n("p",null,[n("img",{src:d,alt:"./media/image9.png"})])],-1),n("h2",null,"ECM management",-1),n("blockquote",null,[n("p",null,"The ECM management interface is used by the administrator to manage the ECM and all engines. This interface can view the status information of the ECM, modify the ECM label information, modify the ECM status information, and query all engine information under each ECM. And only the administrator can see, the administrator’s configuration method can be viewed in the second chapter of this article.")],-1),n("blockquote",null,[n("p",null,[n("img",{src:b,alt:"./media/image10.png"})])],-1),n("blockquote",null,[n("p",null,"Click the edit button to edit the label information of the ECM (only part of the labels are allowed to be edited) and modify the status of the ECM.")],-1),n("blockquote",null,[n("p",null,[n("img",{src:k,alt:"./media/image11.png"})])],-1),n("blockquote",null,[n("p",null,"Click the instance name of the ECM to view all engine information under the ECM.")],-1),n("blockquote",null,[n("p",null,[n("img",{src:f,alt:""})])],-1),n("blockquote",null,[n("p",null,[n("img",{src:q,alt:""})])],-1),n("blockquote",null,[n("p",null,"Similarly, you can stop the engine on this interface, and edit the label information of the engine.")],-1),n("h2",null,"Microservice management",-1),n("blockquote",null,[n("p",null,"The microservice management interface can view all microservice information under Linkis, and this interface is only visible to the administrator. Linkis’s own microservices can be viewed by clicking on the Eureka registration center. The microservices associated with linkis will be listed directly on this interface.")],-1),n("blockquote",null,[n("p",null,[n("img",{src:E,alt:""})])],-1),n("blockquote",null,[n("p",null,[n("img",{src:v,alt:""})])],-1),n("h2",null,"common problem",-1),n("blockquote",null,[n("p",null,"To be added.")],-1)],_={setup:(n,{expose:t})=>(t({frontmatter:{}}),(n,t)=>(e(),l("div",C,y)))},M={class:"markdown-body"},w=[n("h1",null,"计算治理台简介",-1),n("blockquote",null,[n("p",null,"Linkis1.0新增了计算治理台页面，可以提供给用户交互式的UI界面，用于查看Linkis任务的执行情况、自定义参数配置、引擎健康状态、资源剩余情况等等便于用户进行开发和管理的页面。")],-1),n("h1",null,"计算治理台结构",-1),n("blockquote",null,[n("p",null,"计算治理台主要由以下几个功能页组成：")],-1),n("ul",null,[n("li",null,[n("p",null,[n("a",{href:"#%E5%85%A8%E5%B1%80%E5%8E%86%E5%8F%B2"},"全局历史")])]),n("li",null,[n("p",null,[n("a",{href:"#%E8%B5%84%E6%BA%90%E7%AE%A1%E7%90%86"},"资源管理")])]),n("li",null,[n("p",null,[n("a",{href:"#%E5%8F%82%E6%95%B0%E9%85%8D%E7%BD%AE"},"参数配置")])]),n("li",null,[n("p",null,[n("a",{href:"#%E5%85%A8%E5%B1%80%E5%8F%98%E9%87%8F"},"全局变量")])]),n("li",null,[n("p",null,[n("a",{href:"#ECM%E7%AE%A1%E7%90%86"},"ECM管理"),t(" (仅linkis计算治理台管理员可见)")])]),n("li",null,[n("p",null,[n("a",{href:"#%E5%BE%AE%E6%9C%8D%E5%8A%A1%E7%AE%A1%E7%90%86"},"微服务管理"),t(" (仅linkis计算治理台管理员可见)")])]),n("li",null,[n("p",null,[n("a",{href:"#%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98"},"常见问题")])])],-1),n("blockquote",null,[n("p",null,"其中全局历史、资源管理、参数配置、全局变量是所有用户可见，而ECM管理和微服务管理仅仅对linkis计算治理台管理员可见。")],-1),n("blockquote",null,[n("p",null,"Linkis计算治理台管理员可以通过linkis.properties中的下方参数配置：")],-1),n("blockquote",null,[n("p",null,[n("code",null," wds.linkis.governance.station.admin=hadoop (多位管理员用户名通过‘,’分隔)")])],-1),n("h1",null,"计算治理台功能及使用介绍",-1),n("h2",null,"全局历史",-1),n("blockquote",null,[n("p",null,[n("img",{src:u,alt:""})])],-1),n("blockquote",null,[n("p",null,"全局历史界面提供了用户自身的linkis任务提交记录，各个任务的执行状态都可以在此显示，任务执行的失败原因也可以点击任务左侧的查看按钮查询")],-1),n("blockquote",null,[n("p",null,[n("img",{src:s,alt:"./media/image2.png"})])],-1),n("blockquote",null,[n("p",null,[n("img",{src:r,alt:"./media/image3.png"})])],-1),n("blockquote",null,[n("p",null,"对于linkis计算治理台管理员来说，管理员可以通过点击页面的切换管理员视图查看所有用户的历史任务。")],-1),n("blockquote",null,[n("p",null,[n("img",{src:c,alt:"./media/image4.png"})])],-1),n("h2",null,"资源管理",-1),n("blockquote",null,[n("p",null,"在资源管理界面，用户可以看到自己当前启动的引擎状态，以及占用资源的情况，也能够通过页面停止引擎。")],-1),n("blockquote",null,[n("p",null,[n("img",{src:m,alt:"./media/image5.png"})])],-1),n("h2",null,"参数配置",-1),n("blockquote",null,[n("p",null,"参数配置界面提供了用户自定义参数管理的功能，用户可以在该界面管理引擎的相关配置，管理员还能在这里新增应用类型和引擎。")],-1),n("blockquote",null,[n("p",null,[n("img",{src:p,alt:"./media/image6.png"})])],-1),n("blockquote",null,[n("p",null,"用户通过点击上方的应用类型，接着选择应用中拥有的引擎类型，即可展开该目录下的所有配置信息，修改配置信息点击保存即可生效。")],-1),n("blockquote",null,[n("p",null,"编辑目录和新增应用类型仅管理员可见，点击编辑按钮可以删除已有的应用和引擎配置（注意！直接删除应用会删除该应用下所有的引擎配置，并且不可恢复），或者添加引擎，点击新增应用可以添加应用类型。")],-1),n("blockquote",null,[n("p",null,[n("img",{src:g,alt:"./media/image7.png"})])],-1),n("blockquote",null,[n("p",null,[n("img",{src:h,alt:"./media/image8.png"})])],-1),n("h2",null,"全局变量",-1),n("blockquote",null,[n("p",null,"全局变量界面用户可以自定义变量用于代码编写，点击编辑按钮新增参数即可。")],-1),n("blockquote",null,[n("p",null,[n("img",{src:d,alt:"./media/image9.png"})])],-1),n("h2",null,"ECM管理",-1),n("blockquote",null,[n("p",null,"ECM管理界面是用于管理员管理ECM和所有引擎的地方，该界面可以查看到ECM的状态信息、修改ECM标签信息、修改ECM状态信息以及查询各个ECM下的所有引擎信息。且仅管理员可见，管理员的配置方式可以在本文章第二大章节查看。")],-1),n("blockquote",null,[n("p",null,[n("img",{src:b,alt:"./media/image10.png"})])],-1),n("blockquote",null,[n("p",null,"点击编辑按钮，可以编辑ECM的标签信息（仅允许编辑部分标签），以及修改ECM的状态。")],-1),n("blockquote",null,[n("p",null,[n("img",{src:k,alt:"./media/image11.png"})])],-1),n("blockquote",null,[n("p",null,"点击ECM的实例名称，可以查看该ECM下所有的引擎信息。")],-1),n("blockquote",null,[n("p",null,[n("img",{src:f,alt:""})])],-1),n("blockquote",null,[n("p",null,[n("img",{src:q,alt:""})])],-1),n("blockquote",null,[n("p",null,"同样地，可以在该界面停止引擎，并且可以编辑引擎的标签信息。")],-1),n("h2",null,"微服务管理",-1),n("blockquote",null,[n("p",null,"微服务管理界面可以查看Linkis下的所有微服务信息，该界面也仅允许管理员可见。linkis自身的微服务可以点击Eureka注册中心查看，与linkis关联的微服务会直接在该界面列出。")],-1),n("blockquote",null,[n("p",null,[n("img",{src:E,alt:""})])],-1),n("blockquote",null,[n("p",null,[n("img",{src:v,alt:""})])],-1),n("h2",null,"常见问题",-1),n("blockquote",null,[n("p",null,"待补充。")],-1)],A={setup:(n,{expose:t})=>(t({frontmatter:{}}),(n,t)=>(e(),l("div",M,w)))},G={setup(l){const n=a(localStorage.getItem("locale")||"en");return(l,t)=>"en"===n.value?(e(),i(o(_),{key:0})):(e(),i(o(A),{key:1}))}};export{G as default};