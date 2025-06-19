import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import marked from 'marked';
import '../style/single-page.less'; // pastikan ini mengarah ke file yang benar

const margin = '22px 0';

export default function IndexWelcome() {
  return (
    <StaticQuery
      query={graphql`
        query welcomeQuery {
          allBaseYaml {
            edges {
              node {
                id
                data {
                  welcomeMessage
                  vision
                  mission
                  qualityObjectives
                  qualityPolicy
                }
              }
            }
          }
        }
      `}
      render={data => {
        const content = data.allBaseYaml.edges[0].node.data;

        // helper render markdown
        const renderMD = text =>  {if (typeof text !== 'string')
           return ''; return marked(text);
        }

        return (
           <div id="landing-welcome">
            <div className="section-title">Selamat Datang</div>
            <div
              className="intro-text"
              dangerouslySetInnerHTML={{ __html: renderMD(content.welcomeMessage) }}
            />
                 <div id="welcome">
                  <div className="visi-misi-wrapper">
                    {/* Baris 1: Visi + Sasaran */}
                    <div className="row">
                      <div className="box">
                      <h3 className="title">Visi</h3>
                      <div dangerouslySetInnerHTML={{ __html: renderMD(content.vision) }} />
                    </div>
                    <div className="box">
                      <h3 className="title">Sasaran Mutu Institusi</h3>
                      <div dangerouslySetInnerHTML={{ __html: renderMD(content.qualityObjectives) }} />
                    </div>
                  </div>

                  {/* Baris 2: Misi + Kebijakan */}
                    <div className="row">
                      <div className="box">
                      <h3 className="title">Misi</h3>
                      <div dangerouslySetInnerHTML={{ __html: renderMD(content.mission) }} />
                    </div>


                  <div className="box">
                    <h3 className="title">Kebijakan Mutu Institusi</h3>
                    <div dangerouslySetInnerHTML={{ __html: renderMD(content.qualityPolicy) }} />
              </div>
                </div>
              </div>
          </div>
        </div>
        );
      }}
    />
  );
}
