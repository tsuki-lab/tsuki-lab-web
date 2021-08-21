import React from 'react';
import { Container, Inner, Wrapper } from '../atoms/Container';
import { AuthorIcon } from '@/_old-components/AuthorIcon';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import { Heading2, Heading3 } from '../atoms/Heading';
import { SkillIcon } from '../molecules/SkillIcon';
import { LaunchLink } from '../molecules/LaunchLink';

type Element = JSX.IntrinsicElements['div'];
type AboutContainer = {};
type Props = Element & AboutContainer;

const Component: React.FC<Props> = ({children, ...props}) => {
  const { ...restReact } = props;

  // const { dataYaml: { profile } }: DataType = useStaticQuery(query);

  return (
    <Wrapper {...restReact}>
      <Container>
        <Inner>

          <Heading2>about me</Heading2>

          <Author className="author">
            <AuthorIcon />
            <div className="author-info">
              <p className="author-name">hanetsuki</p>
              <p className="author-title">クリエイター</p>
            </div>
          </Author>

          <AuthorMessage>{profile.message}</AuthorMessage>

          <SkillContainer>
            <Heading3>skill</Heading3>

            <Skills>
              {profile.skills.map((skill) => (
                <SkillIcon key={skill.slug} tag="li" slug={skill.slug} />
              ))}
            </Skills>

            <LaunchLink href="https://www.resume.id/tsuki_lab" target="_blank">more details</LaunchLink>
          </SkillContainer>
        </Inner>
      </Container>
    </Wrapper>
  )
}

export const AboutContainer = styled(Component)`
  margin-top: 4rem;
  ${Heading2} {
    margin-bottom: 1rem;
  }
  ${Heading3} {
    margin-bottom: 1rem;
  }
`

const Author = styled.div`
  display: flex;
  align-items: center;

  ${AuthorIcon} {
    height: 75px;
    width: 75px;
    margin-right: 1.2rem;
  }

  .author-info {
    margin-top: .5rem;
  }
  .author-name {
    font-size: 1.3rem;
  }
  .author-title {
    font-size: .8rem;
  }
`

const AuthorMessage = styled.p`
  white-space: pre;
  margin-top: 1rem;
`

const SkillContainer = styled.section`
  margin-top: 3rem;
  ${LaunchLink} {
    display: inline-block;
    margin-top: .4rem;
  }
`

const Skills = styled.ul`
  display: flex;
  padding-bottom: 1.3rem;
  gap: 1.1rem;
`

type DataType = {
  dataYaml: {
    profile: {
      message: string;
      skills: {
        slug: string;
      }[];
    };
  };
}

const query = graphql`
  query {
    dataYaml {
      profile {
        message
        skills {
          slug
        }
      }
    }
  }
`