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
        const renderMD = text => marked(text.replace(/(?:\r\n|\r|\n)/g, '<br/>'));

        return (
          <div id="landing-welcome">
            <div className="section-title">Selamat Datang</div>
            <div
              className="intro-text"
              dangerouslySetInnerHTML={{ __html: renderMD(content.welcomeMessage) }}
            />
            <div className="grid-2-col">
              <div className="col">
                <h3>Visi</h3>
                <div dangerouslySetInnerHTML={{ __html: renderMD(content.vision) }} />

                <h3>Sasaran Mutu Institusi</h3>
                <div dangerouslySetInnerHTML={{ __html: renderMD(content.qualityObjectives) }} />
              </div>
              <div className="col">
                <h3>Misi</h3>
                <div dangerouslySetInnerHTML={{ __html: renderMD(content.mission) }} />

                <h3>Kebijakan Mutu Institusi</h3>
                <div dangerouslySetInnerHTML={{ __html: renderMD(content.qualityPolicy) }} />
              </div>
            </div>
          </div>
        );
      }}
    />
  );
}
