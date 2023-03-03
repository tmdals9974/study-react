import { Col, Form, Row, Typography } from "antd";
import React from "react";

/**
 *
 * @param {object} param
 * @param {() => void} param.onFinish
 * @param {import('react').ReactNode} param.children
 */
export default function AuthLayout({ children, onFinish }) {
  return (
    <>
      <Row justify="center" style={{ marginTop: 100 }}>
        <Col>
          <Typography.Title style={{ fontFamily: "궁서체" }}>찾 아 야 한 다</Typography.Title>
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <Form initialValues={{ remember: true }} onFinish={onFinish} style={{ width: 300, marginTop: 50 }}>
            {children}
          </Form>
        </Col>
      </Row>
    </>
  );
}
