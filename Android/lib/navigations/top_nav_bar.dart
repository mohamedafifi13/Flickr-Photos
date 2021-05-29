import 'package:flickr/explore/search.dart';
import 'package:flickr/home/home.dart';
import 'package:flickr/notifications/notifications.dart';
import 'package:flickr/profile/profile.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

import '../camera/Pages/camera_view.dart';

class TopNavigationBar extends StatefulWidget {
  @override
  static bool change = Search.change;

  TopNavigationBarState createState() => TopNavigationBarState();
}

class TopNavigationBarState extends State<TopNavigationBar> {
  @override
  void witch() {
    setState(() {
      TopNavigationBar.change = Search.change;
    });
  }

  bool _switch = TopNavigationBar.change;
  Widget build(BuildContext context) {
    return _switch
        ? Scaffold(
            body: Search(),
          )
        : DefaultTabController(
            length: 5, //number of tabs
            child: new Scaffold(
              body: new NestedScrollView(
                  headerSliverBuilder:
                      (BuildContext context, bool innerBoxIsScrolled) {
                    return <Widget>[
                      new SliverAppBar(
                        toolbarHeight:
                            0.09 * MediaQuery.of(context).size.height,
                        automaticallyImplyLeading: false,
                        backgroundColor: Color(0xff212124),
                        forceElevated: false,
                        title: TabBar(
                          unselectedLabelColor: Colors.grey,
                          labelColor: Colors.white,
                          isScrollable: false, // switch tabs to scroll off
                          indicatorColor: Colors.white,
                          indicatorWeight: 0.001,
                          //indicatorWeight: 0.1, //indicator size
                          tabs: <Widget>[
                            Tab(
                                child: Icon(
                              FontAwesomeIcons.image,
                              size: 20,
                            )),
                            //home tab
                            Tab(
                                child: Icon(FontAwesomeIcons.search,
                                    size: 20)), //search tab
                            Tab(
                              child:
                                  Icon(FontAwesomeIcons.userCircle, size: 20),
                            ), //profile tab
                            Tab(
                              child: Icon(FontAwesomeIcons.bell, size: 20),
                            ), //notifications tab
                            Tab(
                              child: Icon(FontAwesomeIcons.camera, size: 20),
                            ), //camera tab
                          ],
                        ),
                      ),
                    ];
                  },
                  body: TabBarView(
                    children: <Widget>[
                      Home(),
                      Search(),
                      Profile(),
                      Notifications(),
                      CameraView(),
                    ],
                  )),
            ),
          ); //to view each page when pressed on its tab
  }
}
